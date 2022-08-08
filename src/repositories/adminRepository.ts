import prisma from "../config/database";
import { AdminInputData } from "../types/adminTypes";

export async function findByUsername(username: string) {
  return prisma.admin.findFirst({ where: { username } });
}
