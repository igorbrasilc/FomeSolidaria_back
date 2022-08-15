import * as repository from "../repositories/doneeFormRepository";
import DoneeFormData from "../types/doneeFormTypes";

export async function postDonee(inputs: Partial<DoneeFormData>) {
  const newDonee = await repository.createDonee(inputs);
  return newDonee;
}
