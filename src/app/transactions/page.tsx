import React from "react";
import "@/styles/form.css";
import ListTransactionsForm from "@/components/forms/transactions/ListTransactionsForm";
import { TransactionType } from "@/types/Transaction";

const Transactions = async () => {
  const response = await fetch("http://localhost:3333/transaction", {
    next: { revalidate: 0 },
  });
  const data = (await response.json()) as TransactionType[];

  return <ListTransactionsForm data={data} />;
};

export default Transactions;
