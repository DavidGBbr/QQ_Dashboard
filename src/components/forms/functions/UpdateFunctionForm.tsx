"use client";
import { updateFunction } from "@/actions/functions/UpdateFunction";
import { api } from "@/services/apiClient";
import { TransactionType } from "@/types/Transaction";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type UpdateFunctionProps = {
  data: {
    functionId: number;
    name: string;
    transactionId: number;
    transaction: TransactionType;
  };
};

const UpdateFunctionForm = ({ data }: UpdateFunctionProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<string>(
    "data.transactionId.toString()"
  );
  const [functionName, setFunctionName] = useState<string>(data.name || "");
  const router = useRouter();

  useEffect(() => {
    const getTransactions = async () => {
      const response = await api.get("http://localhost:3333/transaction");
      const transactionsData = await response.data;
      setTransactions(transactionsData);
      console.log(transactionsData);
    };
    getTransactions();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("functionId", data.functionId.toString());
    formData.append("transactionId", selectedTransaction);
    await updateFunction(formData);
    router.push("/functions");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="transaction">
          <span>Nome da transação:</span>
          <select
            name="transactionId"
            id="transaction"
            value={selectedTransaction}
            onChange={(e) => setSelectedTransaction(e.target.value)}
          >
            <option value="" disabled>
              Selecione uma transação
            </option>
            {transactions.map((transaction) => (
              <option
                key={transaction.transactionId}
                value={transaction.transactionId}
              >
                {transaction.transactionName}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="function">
          <span>Nome da função:</span>
          <input
            type="text"
            name="function"
            id="function"
            placeholder="Digite o nome da função..."
            value={functionName}
            onChange={(e) => setFunctionName(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="button-orange">
          Atualizar função
        </button>
      </form>
    </div>
  );
};

export default UpdateFunctionForm;
