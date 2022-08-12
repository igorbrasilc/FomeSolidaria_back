import prisma from "../config/database";

export async function getDonee(id: number) {
  return prisma.donee.findUnique({
    where: { id },
    include: {
      children: {},
      colleagues: {},
      spouse: {},
      address: {},
      donations: { include: { category: {} }, orderBy: { created_at: "desc" } },
      notes: {},
    },
  });
}

export async function getColleague(id: number) {
  return prisma.colleague.findUnique({
    where: { id },
    include: {
      donee: { select: { id: true, name: true, address: {} } },
    },
  });
}

export async function getSpouse(id: number) {
  return prisma.spouse.findUnique({
    where: { id },
    include: {
      donee: { select: { id: true, name: true, address: {} } },
    },
  });
}
