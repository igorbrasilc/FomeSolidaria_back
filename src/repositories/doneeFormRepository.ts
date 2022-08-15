import prisma from "../config/database";
import DoneeFormData from "../types/doneeFormTypes";
import AppLog from "../utils/AppLog";

export function createDonee(inputs: Partial<DoneeFormData>) {
  return prisma.donee.create({
    data: {
      name: inputs.donee.name,
      birthdate: new Date(inputs.donee.birthdate),
      cpf: inputs.donee.cpf ? inputs.donee.cpf : null,
      occupation: inputs.donee.occupation ? inputs.donee.occupation : null,
      rg: inputs.donee.rg ? inputs.donee.rg : null,
      address: !inputs.address
        ? {}
        : {
            create: {
              district: inputs.address.district,
              number: inputs.address.number,
              street: inputs.address.street,
              city: inputs.address.city ? inputs.address.city : "Itapema",
              state: inputs.address.state
                ? inputs.address.state
                : "Santa Catarina",
            },
          },
      spouse: !inputs.spouse
        ? {}
        : {
            create: {
              name: inputs.spouse.name,
              birthdate: new Date(inputs.spouse.birthdate),
              cpf: inputs.spouse.cpf ? inputs.spouse.cpf : null,
              occupation: inputs.spouse.occupation
                ? inputs.spouse.occupation
                : null,
              rg: inputs.spouse.rg ? inputs.spouse.rg : null,
            },
          },
      notes: !inputs.note
        ? {}
        : {
            create: {
              note: inputs.note.note,
              reminder: inputs.note.reminder
                ? new Date(inputs.note.reminder)
                : null,
            },
          },
    },
    select: {
      id: true,
      name: true,
      birthdate: true,
      contact: true,
      occupation: true,
      rg: true,
      cpf: true,
      addressId: true,
      created_at: true,
      updated_at: true,
      donations: true,
      spouse: true,
      colleagues: true,
      children: true,
      notes: true,
      address: true,
    },
  });
}

export function createChildren(input: any, id: number) {
  return prisma.child.create({
    data: {
      name: input.name,
      birthdate: input.birthdate ? new Date(input.birthdate) : null,
      contact: input.contact ? input.contact : null,
      doneeId: id,
    },
  });
}

export function createAddress(input: any, id: number) {
  return prisma.address.create({
    data: {
      district: input.address.district || "",
      number: input.address.number || "",
      street: input.address.street || "",
      city: input.address.city ? input.address.city : "Itapema",
      state: input.address.state ? input.address.state : "Santa Catarina",
    },
  });
}

export function createColleague(input: any, id: number) {
  return prisma.colleague.create({
    data: {
      name: input.name,
      cpf: input.cpf ? input.cpf : null,
      rg: input.rg ? input.rg : null,
      occupation: input.occupation ? input.occupation : null,
      contact: input.contact ? input.contact : null,
      doneeId: id,
    },
  });
}
