import { Address, Admin, Category } from ".prisma/client";
import "dotenv/config";
import prisma from "../src/config/database";
import AppLog from "../src/utils/AppLog";
import { CategoryTypes } from "../src/types/CategoryTypes";
import * as adminUtils from "../src/utils/adminUtils";

const admins: Omit<Admin, "id">[] = [
  {
    name: "admin",
    password: adminUtils.hashPassword(process.env.ADMIN_PASSWORD),
    username: "admin",
  },
];

const addresses: Omit<Address, "id">[] = [
  {
    district: "N/A",
    number: "N/A",
    street: "N/A",
    city: "Itapema",
    state: "Santa Catarina",
  },
];

const categories: CategoryTypes[] = [
  {
    category: "CestaP",
  },
  {
    category: "CestaG",
  },
  {
    category: "Leite",
  },
  {
    category: "Móvel",
  },
  {
    category: "Roupa",
  },
  {
    category: "Outros",
  },
];

async function main() {
  await prisma.$connect();
  await prisma.admin.createMany({ data: admins });
  await prisma.category.createMany({ data: categories });
  await prisma.address.createMany({ data: addresses });
}

main()
  .catch((err) => {
    AppLog("Error", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
