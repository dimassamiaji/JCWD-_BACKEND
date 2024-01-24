/** @format */

export type expense = {
  id: number;
  expenseName: string;
  nominal: number;
  description: string;
};

type expenses = expense[];

export const expenses: expenses = [
  {
    id: 1,
    expenseName: "Harry Potter : The Deathly Hallows",
    nominal: 300000,
    description: "Buku",
  },
  {
    id: 2,
    expenseName: "Harry Potter : Half Blood Prince",
    nominal: 350000,
    description: "Buku",
  },
];
