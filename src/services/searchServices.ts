import * as repository from "../repositories/searchRepository";
import { ColleagueSearchResult } from "../types/colleagueTypes";
import { DoneeSearchResult } from "../types/doneeTypes";
import { SpouseSearchResult } from "../types/spouseTypes";

export async function search(input: string) {
  const donees: DoneeSearchResult[] = await repository.searchDonee(input);
  const spouses: SpouseSearchResult[] = await repository.searchSpouse(input);
  const colleagues: ColleagueSearchResult[] = await repository.searchColleague(
    input
  );

  const results = {
    donees,
    spouses,
    colleagues,
  };

  return results;
}
