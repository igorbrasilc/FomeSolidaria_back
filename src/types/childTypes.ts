import { Child } from ".prisma/client";

export type ChildSearchResult = Omit<
  Child,
  "birthdate" | "created_at" | "updated_at" | "doneeId"
>;
