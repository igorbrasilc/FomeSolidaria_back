import { Categories } from "./CategoryTypes";

export default interface DonationFormData {
  donation: {
    quantity: number;
    description: string | null;
    category: Categories;
  };
  note: {
    note: string | null;
    reminder: Date | null;
  };
}
