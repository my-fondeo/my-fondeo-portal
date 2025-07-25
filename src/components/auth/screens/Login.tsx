import { emailFormOptions } from "@util/form/errors";
import { actions } from "astro:actions";
import { useForm } from "react-hook-form";
import { Notyf } from "notyf";
import { Input } from "../ui/Input";
import { useState } from "react";

const notyf = new Notyf({ position: { x: "center", y: "center" } });

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({ email, password }: FormData) => {
    if (isLoading) return;
    setIsLoading(true);
    const { data, error } = await actions.login({
      email,
      password,
    });
    setIsLoading(false);
    if (error) notyf.error(error.message || "Error al iniciar sesión");
    if (data) window.location.href = "/app";
  };

  return (
    <form
      className="text-secondary w-full sm:w-[90%] md:w-[80%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="mt-6 sm:mt-8 lg:mt-10 mb-4 sm:mb-5 font-medium h-10 sm:h-12 text-sm sm:text-base">
        Bienvenido de vuelta. <br /> Tu próximo movimiento te espera.
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl">Ingresa</h1>

      <Input
        label="Correo electrónico"
        placeholder="example@email.com"
        className="mt-4 sm:mt-6 lg:mt-7"
        error={errors.email?.message}
        {...register("email", emailFormOptions)}
      />
      <Input
        label="Contraseña"
        passInput
        className="mt-2"
        error={errors.password?.message}
        {...register("password", {
          required: "Contraseña requerida.",
          minLength: { message: "Contraseña muy corta", value: 6 },
        })}
      />
      <button className="mt-4 sm:mt-6 py-2.5 sm:py-3 px-8 sm:px-10 bg-quaternary text-primary-text cursor-pointer rounded-xl text-sm sm:text-base hover:bg-quaternary/90 transition-colors">
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin align-middle"></span>
        ) : (
          "Ingresar"
        )}
      </button>
      <br />
      <p className="mt-3">
        o{" "}
        <a href="#register" className="font-semibold hover:underline">
          Regístrate
        </a>
      </p>
    </form>
  );
};

export default Login;
