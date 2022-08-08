import { Admin } from ".prisma/client";

type AdminInputData = Omit<Admin, "id" | "name">;

export { AdminInputData };
