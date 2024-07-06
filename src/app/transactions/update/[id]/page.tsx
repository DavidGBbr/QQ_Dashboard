"use client";

import RedirectBtn from "@/components/RedirectBtn";
import UpdateTransactionForm from "@/components/forms/transactions/UpdateTransactionForm";
import { api } from "@/services/apiClient";
import { useEffect, useState } from "react";

type PageParams = {
  params: {
    id: number | string;
  };
};

const UpdateTransactionPage = ({ params }: PageParams) => {
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    const getTransaction = async () => {
      const response = await api.get(`/transaction/${params.id}`);
      const data = await response.data;
      setTransaction(data);
    };

    getTransaction();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/transactions">{"< Voltar"}</RedirectBtn>
        <h2>Editar transação</h2>
      </div>
      {transaction && <UpdateTransactionForm data={transaction} />}
    </main>
  );
};

export default UpdateTransactionPage;
