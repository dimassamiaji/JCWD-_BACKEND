/** @format */

export type expense = {
  date: string | number | Date;
  id: number;
  expenseName: string;
  nominal: number;
  category: string;
};

type expenses = expense[];

export const expenses: expenses = [
  {
    id: 1,
    expenseName: "Harry Potter : The Deathly Hallows",
    nominal: 300000,
    category: "Buku",
    date: "2024-01-23",
  },
  {
    id: 2,
    expenseName: "Harry Potter : Half Blood Prince",
    nominal: 350000,
    category: "Buku",
    date: "2024-01-24",
  },
];
