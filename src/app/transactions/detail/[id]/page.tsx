"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { TransactionType } from "@/types/Transaction";
import DetailTransactionForm from "@/components/forms/transactions/DetailTransactionForm";
import { api } from "@/services/apiClient";

type PageParams = {
  params: {
    id: number | string;
  };
};

const DetailTransactionPage = ({ params }: PageParams) => {
  const [transaction, setTransaction] = useState<TransactionType>();

  useEffect(() => {
    const getTransaction = async () => {
      const response = await api.get(
        `http://localhost:3333/transaction/${params.id}`
      );
      const data = (await response.data) as TransactionType;
      setTransaction(data);
    };

    getTransaction();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/transactions">{"< Voltar"}</RedirectBtn>
        <h2>Detalhes do transações</h2>
      </div>
      {transaction && <DetailTransactionForm data={transaction} />}
    </main>
  );
};

export default DetailTransactionPage;
