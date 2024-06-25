"use client";

import RedirectBtn from "@/components/RedirectBtn";
import UpdateTransactionForm from "@/components/forms/transactions/UpdateTransactionForm";
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
      const response = await fetch(
        `http://localhost:3333/transaction/${params.id}`,
        {
          next: { revalidate: 0 },
        }
      );
      const data = await response.json();
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
