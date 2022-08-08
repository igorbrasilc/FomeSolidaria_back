import prisma from "../config/database";

export async function searchDonee(input: string) {
  return prisma.donee.findMany({
    select: { name: true, id: true, cpf: true, rg: true },
    where: {
      OR: [
        { name: { contains: input, mode: "insensitive" } },
        { cpf: { contains: input } },
        { rg: { contains: input } },
      ],
    },
  });
}

export async function searchSpouse(input: string) {
  return prisma.spouse.findMany({
    select: { name: true, id: true, cpf: true, rg: true },
    where: {
      OR: [
        { name: { contains: input, mode: "insensitive" } },
        { cpf: { contains: input } },
        { rg: { contains: input } },
      ],
    },
  });
}

export async function searchColleague(input: string) {
  return prisma.colleague.findMany({
    select: { name: true, id: true, cpf: true, rg: true },
    where: {
      OR: [
        { name: { contains: input, mode: "insensitive" } },
        { cpf: { contains: input } },
        { rg: { contains: input } },
      ],
    },
  });
}

export async function searchChild(input: string) {
  return prisma.child.findMany({
    select: { name: true, id: true },
    where: { name: { contains: input, mode: "insensitive" } },
  });
}
