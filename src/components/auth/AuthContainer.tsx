import { useEffect, useState, type PropsWithChildren } from "react";
import Login from "./Login";
import Register from "./Register";

export const AuthContainer = () => {
  const updateHash = () => {
    const hash = window.location.hash;
    if (hash === "#login" || hash === "#register") {
      setMode(hash);
    } else {
      setMode("#login");
    }
  };

  const [mode, setMode] = useState(() => window.location.hash || "#login");

  useEffect(() => {
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isLogin = mode == "#login";

  return (
    <div className="flex flex-col items-center justify-start bg-bg w-full h-full rounded-l-2xl p-6">
      <div className="bg-secondary rounded-lg flex items-center h-14 px-8 gap-16 relative">
        <a
          className={`flex items-center cursor-pointer font-bold z-100 text-lg h-[80%] ${
            isLogin ? "text-secondary" : ""
          }`}
          href="#login"
        >
          Ingresar
        </a>
        <a
          className={`flex items-center cursor-pointer font-bold z-100 text-lg h-[80%] ${
            !isLogin ? "text-secondary" : ""
          }`}
          href="#register"
        >
          Registro
        </a>
        <div
          className={`bg-primary font-bold h-[80%] w-30 rounded-xl absolute transition-all ease-in duration-150 ${
            isLogin ? "left-3" : "left-38"
          }`}
        ></div>
      </div>

      {isLogin ? <Login /> : <Register />}
    </div>
  );
};
