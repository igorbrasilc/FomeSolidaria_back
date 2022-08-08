import prisma from "../config/database";
import { Categories } from "../types/CategoryTypes";

export async function getCategoryCount(category: Categories) {
  return prisma.donation.findMany({
    select: { quantity: true },
    where: { category: { category } },
  });
}
