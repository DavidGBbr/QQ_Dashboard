"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import ListTransactionsForm from "@/components/forms/transactions/ListTransactionsForm";
import { TransactionType } from "@/types/Transaction";
import { api } from "@/services/apiClient";

const Transactions = () => {
  const [data, setData] = useState<TransactionType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/transaction");
      const transactions = (await response.data) as TransactionType[];
      setData(transactions);
    };

    getData();
  }, []);

  return <>{data && <ListTransactionsForm data={data} />}</>;
};

export default Transactions;
