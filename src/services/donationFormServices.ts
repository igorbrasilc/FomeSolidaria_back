import * as repository from "../repositories/donationFormRepository";
import donationFormData from "../types/donationFormTypes";
import AppLog from "../utils/AppLog";

export async function postDonation(
  inputs: Partial<donationFormData>,
  adminId: number,
  doneeId: number
) {
  AppLog("Service", "Searching category");
  const category = await repository.getCategoryFromName(
    inputs.donation.category
  );
  AppLog("Service", "Category found");
  const newDonation = await repository.createDonation(
    inputs.donation,
    category.id,
    doneeId,
    adminId
  );
  AppLog("Service", "Donation created");

  if (inputs.note.note) {
    AppLog("Service", "Note found");
    await repository.createNote(inputs.note, doneeId);
    AppLog("Service", "Note created");
  }

  return newDonation;
}
