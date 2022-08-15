export default interface DoneeFormData {
  donee: {
    name: string;
    birthdate: Date;
    contact: string | null;
    occupation: string | null;
    rg: string | null;
    cpf: string | null;
  };
  spouse: {
    name: string;
    birthdate: Date;
    contact: string | null;
    occupation: string | null;
    rg: string | null;
    cpf: string | null;
  };
  colleagues: {
    name: string;
    contact: string | null;
    occupation: string | null;
    rg: string | null;
    cpf: string | null;
  }[];
  children: {
    name: string;
    birthdate: Date | null;
    contact: string | null;
  }[];
  address: {
    street: string;
    district: string;
    number: string;
    state: string | null;
    city: string | null;
  };
  note: {
    note: string;
    reminder: Date | null;
  };
}
