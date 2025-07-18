import { useForm } from "react-hook-form";
import { Input } from "./ui/Input";
import { actions } from "astro:actions";
import { useEffect } from "react";
import { emailFormOptions, passwordValidators } from "@util/form/errors";
import { Notyf } from "notyf";

const notyf = new Notyf({ position: { x: "center", y: "center" } });
interface AuthForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<AuthForm>();

  const password = watch("password");

  const onSubmit = async (authForm: AuthForm) => {
    const { name, email, password, confirmPassword } = authForm;
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    const { data, error } = await actions.register({ email, name, password });
    if (error) notyf.error(error.message || "Error al registrar usuario");
    if (data) window.location.href = "/app";
  };

  return (
    <form
      className="text-secondary w-full md:w-[80%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="mt-10 mb-5 font-medium h-12 flex items-center">
        Desbloquea Tu Talento
      </p>
      <h1 className="text-5xl ">Regístrate</h1>

      <Input
        label="Nombre Completo"
        placeholder="Daniel Gallego"
        className="mt-7"
        {...register("name", {
          required: "Nombre completo es obligatorio",
          minLength: {
            value: 8,
            message: "El nombre debe tener al menos 8 caracteres",
          },
        })}
        error={errors.name?.message}
      />
      <Input
        label="Correo electrónico"
        placeholder="example@email.com"
        className="mt-2"
        {...register("email", emailFormOptions)}
        error={errors.email?.message}
      />
      <div className="flex justify-between gap-8">
        <Input
          label="Contraseña"
          passInput
          className="flex-inline mt-2"
          {...register("password", {
            required: "Contraseña requerida.",
            validate: { ...passwordValidators },
          })}
          error={errors.password?.message}
        />
        <Input
          label="Confirmar Contraseña"
          passInput
          className="flex-inline mt-2"
          {...register("confirmPassword", {
            required: "Confirmar contraseña es obligatorio",
            validate: {
              ...passwordValidators,
              match: (value) =>
                value === password || "Las contraseñas no coinciden",
            },
          })}
          error={errors.confirmPassword?.message}
        />
      </div>
      <button className="cursor-pointer mt-6 py-3 px-10 bg-quaternary text-primary-text">
        Crear cuenta
      </button>
      <br />
      <p className="mt-3">
        o{" "}
        <a href="#register" className="font-semibold hover:underline">
          Ingresa
        </a>
      </p>
    </form>
  );
};

export default Register;
