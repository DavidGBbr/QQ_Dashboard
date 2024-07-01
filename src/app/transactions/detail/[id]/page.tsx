"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { TransactionType } from "@/types/Transaction";
import DetailTransactionForm from "@/components/forms/transactions/DetailTransactionForm";

type PageParams = {
  params: {
    id: number | string;
  };
};

const DetailTransactionPage = ({ params }: PageParams) => {
  const [transaction, setTransaction] = useState<TransactionType>();

  useEffect(() => {
    const getTransaction = async () => {
      const response = await fetch(
        `http://localhost:3333/transaction/${params.id}`,
        {
          next: { revalidate: 0 },
        }
      );
      const data = (await response.json()) as TransactionType;
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
