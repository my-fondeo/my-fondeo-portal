import { useForm } from "@hooks/useForm";
import { Input } from "./ui/Input";

const Register = () => {
  const { formValues: authForm, handleInputChange } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(authForm);
  };

  return (
    <div className="text-secondary w-full md:w-[80%]">
      <p className="mt-10 mb-5 font-medium h-12 flex items-center">Desbloquea Tu Talento</p>
      <h1 className="text-5xl ">Regístrate</h1>

      <Input
        value={authForm.name}
        onChange={handleInputChange}
        label="Nombre Completo"
        placeholder="Daniel Gallego"
        name="name"
        className="mt-7"
      />
      <Input
        value={authForm.email}
        onChange={handleInputChange}
        label="Correo electrónico"
        placeholder="example@email.com"
        name="email"
        className="mt-2"
      />
      <div className="flex justify-between gap-8">
        <Input
          value={authForm.password}
          onChange={handleInputChange}
          label="Contraseña"
          name="password"
          passInput
          className="flex-inline mt-2"
        />
        <Input
          value={authForm.confirmPassword}
          onChange={handleInputChange}
          label="Confirmar Contraseña"
          name="confirmPassword"
          passInput
          className="flex-inline mt-2"
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
    </div>
  );
};

export default Register;
