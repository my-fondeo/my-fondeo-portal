export const emailFormOptions = {
  required: "Email requerido.",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Email inválido.",
  },
}

export const passwordValidators = {
  haveCap: (value: any) =>
    /[A-Z]/.test(value) || "Debe tener mínimo una mayúscula",
  haveNumber: (value: any) =>
    /[0-9]/.test(value) || "Debe tener al menos un número",

}