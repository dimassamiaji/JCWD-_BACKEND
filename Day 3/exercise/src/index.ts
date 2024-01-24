/** @format */

import express, { Request, Response, Application } from "express";
import { expense, expenses } from "./data";

const app: Application = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to exercise API");
});
// npm i --save-dev @types/cors

//Create
app.post("/expenses", (req: Request, res: Response) => {
  const { expenseName, nominal, category } = req.body; //data dari req.body
  const newExpense: expense = {
    id: expenses[expenses.length - 1].id + 1,
    expenseName,
    nominal,
    category,
  }; //template new expense sesuai dengan data di array
  expenses.push(newExpense); //push new data ke dalam array

  return res.send({
    message: "data berhasil ditambahkan",
    newData: newExpense,
  });
});

// Read
app.get("/expenses", (req: Request, res: Response) => {
  return res.send({
    message: "data expense total " + expenses.length,
    data: expenses,
  });
});

//Update
app.patch("/expenses/:id", (req: Request, res: Response) => {
  const { id } = req.params; // get id dari params
  const { body } = req; // ambil data dari req.body
  const index = expenses.findIndex((produk) => produk.id == Number(id)); //cari index produk sesuai dengan id
  if (index == -1)
    return res.status(500).send({
      message: "id tidak ditemukan",
    }); //pada saat id tidak ketemu, maka return error

  const editExpense: expense = {
    id: expenses[index].id, //id tidak dapat diubah dari req.body
    expenseName: body.expenseName || expenses[index].expenseName,
    nominal: body.nominal || expenses[index].nominal,
    category: body.category || expenses[index].category,
  };

  expenses[index] = editExpense; //update value ke dalam data produk

  return res.send({
    message: "data berhasil diupdate",
    data: expenses[index],
  }); //tampilakn response dari produk
});

//Delete
app.delete("/expenses/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const index = expenses.findIndex((produk) => produk.id == Number(id)); //cari index produk sesuai dengan id
  if (index == -1)
    return res.status(500).send({
      message: "id tidak ditemukan",
    }); //pada saat id tidak ketemu, maka return error

  expenses.splice(index, 1);
  res.send({
    message: "data berhasil dihapus",
  });
});

// // Get total expense by date range
// app.get("/expenses/totalByDateRange", (req:Request, res:Response) => {
//   const { startDate, endDate } = req.query;

//   if (!startDate || !endDate) {
//     return res
//       .status(400)
//       .send("Please provide both startDate and endDate parameters");
//   }

//   const expensesInDateRange = expenses.filter((exp) => {
//     const expenseDate = new Date(exp.date);
//     return (
//       expenseDate >= new Date(startDate) && expenseDate <= new Date(endDate)
//     );
//   });

//   const totalExpense = expensesInDateRange.reduce(
//     (total, exp) => total + exp.nominal,
//     0
//   );

//   res.send(`Total Expense in Date Range: ${totalExpense}`);
// });

// Get total expense by category
app.get("/expenses/totalByCategory", (req: Request, res: Response) => {
  const { category } = req.query;

  if (!category) {
    return res.status(400).send("Please provide the category parameter");
  }

  const expensesInCategory = expenses.filter(
    (exp) => exp.category === category
  );
  const totalExpense = expensesInCategory.reduce(
    (total, exp) => total + exp.nominal,
    0
  );

  res.send(`Total Expense in Category '${category}': ${totalExpense}`);
});

app.listen(PORT, () => {
  console.log("app runs on port " + PORT);
});
