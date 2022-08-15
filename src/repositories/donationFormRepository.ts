import prisma from "../config/database";
import DonationFormData from "../types/donationFormTypes";

export async function getCategoryFromName(category: string) {
  return prisma.category.findFirstOrThrow({
    where: { category },
    select: {
      category: true,
      id: true,
    },
  });
}

export async function createDonation(
  inputs: DonationFormData["donation"],
  categoryId: number,
  doneeId: number,
  adminId: number
) {
  return prisma.donation.create({
    data: {
      categoryId,
      description: inputs.description ? inputs.description : null,
      doneeId,
      quantity: Number(inputs.quantity),
      registration: {
        create: {
          adminId,
        },
      },
    },
  });
}

export async function createNote(
  inputs: DonationFormData["note"],
  doneeId: number
) {
  return prisma.note.create({
    data: {
      note: inputs.note,
      reminder: inputs.reminder ? new Date(inputs.reminder) : null,
      doneeId,
    },
  });
}
