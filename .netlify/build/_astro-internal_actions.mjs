import axios from 'axios';
import { create } from 'zustand';
import { a as AstroUserError } from './chunks/astro/server_BGGZ-78z.mjs';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './chunks/shared_DDkQUPVS.mjs';
import 'es-module-lexer';
import 'clsx';
import 'cookie';
import 'html-escaper';
import * as z from 'zod';
import { d as defineAction } from './chunks/server_B-FsKxxP.mjs';

const API_URL = "http://ec2-44-211-247-200.compute-1.amazonaws.com";
const authApi = axios.create({
  baseURL: `${API_URL}/auth`
});
authApi.interceptors.request.use(async (config) => {
  return config;
});

const authCheckStatus = async () => {
  try {
    const token = authApi.defaults.headers.common["Authorization"];
    if (!token) {
      return null;
    }
    const { data } = await authApi.get("/check-status");
    return data;
  } catch (e) {
    console.error("Check status error: ", e);
    return null;
  }
};
const authLogin = async (email, password) => {
  email = email.toLowerCase();
  try {
    const { data } = await authApi.post("/login", { email, password });
    return data;
  } catch (e) {
    if (e.isAxiosError) {
      const error = {
        status: e.response?.status || 500,
        message: e.response?.data?.message || "Error de red",
        data: e.response?.data
      };
      throw error;
    }
    throw {
      status: 500,
      message: "Error desconocido",
      data: e
    };
  }
};

const authRegister = async (body) => {
  try {
    const { data } = await authApi.post("/register", body);
    return data;
  } catch (e) {
    if (e.isAxiosError) {
      const error = {
        status: e.response?.status || 500,
        message: e.response?.data?.message || "Error de red",
        data: e.response?.data
      };
      throw error;
    }
    throw {
      status: 500,
      message: "Error desconocido",
      data: e
    };
  }
};

const useAuthStore = create()(
  (set, get) => ({
    status: "checking",
    user: void 0,
    token: void 0,
    changeStatus: async (token, user) => {
      if (!token || !user) {
        get().logout();
        return false;
      }
      set({ user, token, status: "authenticated" });
      return true;
    },
    login: async (email, password) => {
      const resp = await authLogin(email, password);
      return await get().changeStatus(resp?.token, resp?.user);
    },
    checkStatus: async () => {
      const resp = await authCheckStatus();
      await get().changeStatus(resp?.token, resp?.user);
    },
    logout: async () => {
      set({ user: void 0, token: void 0, status: "unauthenticated" });
    },
    register: async (data) => {
      const resp = await authRegister(data);
      if (!resp?.user) {
        return false;
      }
      return await get().changeStatus(resp?.token, resp?.user);
    }
  })
);

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function getActionPath(action) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      }
    }),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? "data" : "error",
    body: await rawResult.text()
  });
}
toActionProxy();

const registerUser = defineAction({
  accept: "json",
  input: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
    // Todo: remember me
  }),
  handler: async (payload, { cookies, url }) => {
    try {
      const { token, user } = await authRegister(payload);
      cookies.set("token", token, { path: "/" });
      useAuthStore.setState({ user, token });
      return true;
    } catch (err) {
      const message = err.message || "Error desconocido";
      throw new AstroUserError(message, "");
    }
  }
});
const loginUser = defineAction({
  accept: "json",
  input: z.object({
    email: z.string().email(),
    password: z.string().min(6)
  }),
  handler: async ({ email, password }, { cookies, url }) => {
    try {
      const { token, user } = await authLogin(email, password);
      cookies.set("token", token, { path: "/" });
      useAuthStore.setState({ user, token });
      return true;
    } catch (e) {
      const message = e.message || "Error desconocido";
      throw new AstroUserError(message, "");
    }
  }
});

const server = {
  register: registerUser,
  login: loginUser
};

export { server };
