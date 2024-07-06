"use client";
import { createFunction } from "@/actions/functions/CreateFunction";
import { SubmitBtn } from "@/components/SubmitBtn";
import { api } from "@/services/apiClient";
import { TransactionType } from "@/types/Transaction";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateFunctionForm = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<string>("");
  const [functionName, setFunctionName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const getTransactions = async () => {
      const response = await api.get("/transaction");
      const transactionsData = await response.data;
      setTransactions(transactionsData);
    };
    getTransactions();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await createFunction(formData);
    router.push("/functions");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="transaction">
          <span>Nome da transação:</span>
          <select
            name="transaction"
            id="transaction"
            value={selectedTransaction}
            onChange={(e) => setSelectedTransaction(e.target.value)}
            required
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
        <SubmitBtn>Criar função</SubmitBtn>
      </form>
    </div>
  );
};

export default CreateFunctionForm;
