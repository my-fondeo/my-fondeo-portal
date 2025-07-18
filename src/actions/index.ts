import { loginUser, registerUser } from "./auth.actions";

export const server = {
  register: registerUser,
  login: loginUser
}