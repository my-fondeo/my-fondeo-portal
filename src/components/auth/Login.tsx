import { emailFormOptions, passwordValidators } from "@util/form/errors";
import { Input } from "./ui/Input";
import { actions } from "astro:actions";
import { useForm } from "react-hook-form";
import { Notyf } from 'notyf';

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

  const onSubmit = async ({ email, password }: FormData) => {
    const {data, error} = await actions.login({
      email,
      password,
    });

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
        {...register("password", {
          required: "Contraseña requerida.",
          validate: { ...passwordValidators },
        })}
      />
      <button className="mt-4 sm:mt-6 py-2.5 sm:py-3 px-8 sm:px-10 bg-quaternary text-primary-text cursor-pointer rounded-xl text-sm sm:text-base hover:bg-quaternary/90 transition-colors">
        Ingresar
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
