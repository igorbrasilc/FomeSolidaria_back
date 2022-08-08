import joi from "joi";
import { AdminInputData } from "../types/adminTypes";

export const signIn = joi.object<AdminInputData>({
  password: joi.string().required(),
  username: joi.string().required(),
});
