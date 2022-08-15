import prisma from "../config/database";
import DoneeFormData from "../types/doneeFormTypes";

export function createDonee(inputs: Partial<DoneeFormData>) {
  return prisma.donee.create({
    data: {
      name: inputs.donee.name,
      birthdate: inputs.donee.birthdate,
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
      notes: !inputs.note
        ? {}
        : {
            create: {
              note: inputs.note.note,
              reminder: inputs.note.reminder ? inputs.note.reminder : null,
            },
          },
    },
    select: {},
  });
}
