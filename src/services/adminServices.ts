import { AdminInputData } from "../types/adminTypes";
import * as utils from "../utils/adminUtils";
import * as repository from "../repositories/adminRepository";
import { notFoundError } from "../utils/errorUtils";

export async function checkIfUsernameAlreadyExists(username: string) {
  const admin = await repository.findByUsername(username);

  if (!admin) {
    throw notFoundError("Admin not found");
  }

  return admin;
}

export async function signIn(adminInput: AdminInputData) {
  const adminDb = await checkIfUsernameAlreadyExists(adminInput.username);
  await utils.unhashAndComparePasswords(adminInput.password, adminDb.password);
  const token = utils.generateToken(adminDb);
  return token;
}
