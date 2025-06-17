import { useForm } from "@hooks/useForm";
import { Input } from "./ui/Input";

const Login = () => {
  const { formValues: authForm, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(authForm);
  };

  return (
    <div className="text-secondary w-full md:w-[80%]">
      <p className="mt-10 mb-5 font-medium h-12">
        Bienvenido de vuelta. <br /> Tu próximo movimiento te espera.
      </p>
      <h1 className="text-5xl">Ingresa</h1>

      <Input
        value={authForm.email}
        onChange={handleInputChange}
        label="Correo electrónico"
        placeholder="example@email.com"
        name="email"
        className="mt-7"
      />
      <Input
        value={authForm.password}
        onChange={handleInputChange}
        label="Contraseña"
        name="password"
        passInput
        className="mt-2"
      />
      <button className="mt-6 py-3 px-10 bg-quaternary text-primary-text cursor-pointer">
        Ingresar
      </button>
      <br />
      <p className="mt-3">
        o{" "}
        <a href="#register" className="font-semibold hover:underline">
          Regístrate
        </a>
      </p>
    </div>
  );
};

export default Login;
