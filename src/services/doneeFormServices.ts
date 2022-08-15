import * as repository from "../repositories/doneeFormRepository";
import DoneeFormData from "../types/doneeFormTypes";
import AppLog from "../utils/AppLog";

export async function postDonee(inputs: Partial<DoneeFormData>) {
  let newDonee = await repository.createDonee(inputs);

  if (inputs.children) {
    for (let i = 0; i < inputs.children.length; i++) {
      await repository.createChildren(inputs.children[i], newDonee.id);
    }
  }

  if (inputs.colleagues) {
    for (let i = 0; i < inputs.colleagues.length; i++) {
      await repository.createColleague(inputs.colleagues[i], newDonee.id);
    }
  }

  return newDonee;
}
