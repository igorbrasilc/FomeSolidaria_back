import { notFoundError } from "../utils/errorUtils";
import * as repository from "../repositories/peopleRepository";

export async function getDonee(id: number) {
  const doneeInfos = await repository.getDonee(id);
  if (!doneeInfos) {
    return notFoundError("Donatário não encontrado");
  }
  return doneeInfos;
}

export async function getColleague(id: number) {
  const colleagueInfos = await repository.getColleague(id);
  if (!colleagueInfos) {
    return notFoundError("Colega não encontrado");
  }
  return colleagueInfos;
}

export async function getSpouse(id: number) {
  const spouseInfos = await repository.getSpouse(id);
  if (!spouseInfos) {
    return notFoundError("Cônjuge não encontrado");
  }
  return spouseInfos;
}
