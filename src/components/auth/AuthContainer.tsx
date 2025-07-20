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
    <div className="flex flex-col items-center justify-start bg-bg w-full h-full rounded-l-2xl lg:rounded-l-2xl rounded-r-2xl lg:rounded-r-none p-4 sm:p-6 pb-12 max-w-[80vw]">
      <div className="bg-secondary rounded-lg flex items-center h-12 sm:h-14 px-4 sm:px-6 lg:px-8 gap-8 sm:gap-12 lg:gap-16 relative">
        <span
          className={`flex items-center cursor-pointer font-bold z-100 text-sm sm:text-base lg:text-lg h-[80%] ${
            isLogin ? "text-secondary" : ""
          }`}
          onClick={() => window.location.replace("#login")}
        >
          Ingresar
        </span>
        <span
          className={`flex items-center cursor-pointer font-bold z-100 text-sm sm:text-base lg:text-lg h-[80%] ${
            !isLogin ? "text-secondary" : ""
          }`}
          onClick={() => window.location.replace("#register")}
        >
          Registro
        </span>
        <div
          className={`bg-primary font-bold h-[80%] w-19 sm:w-23 lg:w-30 rounded-xl absolute transition-all ease-in duration-150 ${
            isLogin ? "left-2 sm:left-3" : "left-25 sm:left-32 lg:left-38"
          }`}
        ></div>
      </div>

      {isLogin ? <Login /> : <Register />}
    </div>
  );
};
