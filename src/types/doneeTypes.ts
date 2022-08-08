import { Donee } from ".prisma/client";

export type DoneeInputData = Omit<
  Donee,
  "id" | "created_at" | "updated_at" | "addressId"
>;

export type DoneeSearchResult = Omit<
  Donee,
  | "birthdate"
  | "contact"
  | "occupation"
  | "addressId"
  | "created_at"
  | "updated_at"
>;
