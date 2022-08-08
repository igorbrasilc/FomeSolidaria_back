import { Spouse } from ".prisma/client";

export type DoneeInputData = Omit<
  Spouse,
  "id" | "created_at" | "updated_at" | "doneeId"
>;

export type SpouseSearchResult = Omit<
  Spouse,
  | "birthdate"
  | "contact"
  | "occupation"
  | "created_at"
  | "updated_at"
  | "doneeId"
>;
