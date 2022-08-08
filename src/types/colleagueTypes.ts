import { Colleague } from ".prisma/client";

export type ColleagueSearchResult = Omit<
  Colleague,
  | "birthdate"
  | "contact"
  | "occupation"
  | "created_at"
  | "updated_at"
  | "doneeId"
>;
