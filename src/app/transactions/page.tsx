"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import ListTransactionsForm from "@/components/forms/transactions/ListTransactionsForm";
import { TransactionType } from "@/types/Transaction";

const Transactions = () => {
  const [data, setData] = useState<TransactionType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3333/transaction");
      const transactions = (await response.json()) as TransactionType[];
      setData(transactions);
    };

    getData();
  }, []);

  return <>{data && <ListTransactionsForm data={data} />}</>;
};

export default Transactions;
