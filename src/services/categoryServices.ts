import { Categories } from "../types/CategoryTypes";
import * as repository from "../repositories/categoryRepository";

export async function getCategory(category: Categories) {
  const categoryCountByQuantities = await repository.getCategoryCount(category);
  const categoryCount = categoryCountByQuantities.reduce(
    (sum, curr) => (sum += curr.quantity),
    0
  );
  return categoryCount;
}
