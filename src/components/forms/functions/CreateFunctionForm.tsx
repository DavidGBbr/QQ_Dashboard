"use client";
import { createFunction } from "@/actions/CreateFunction";
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
      const response = await fetch("http://localhost:3333/transaction");
      const transactionsData = await response.json();
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
          />
        </label>
        <button type="submit" className="button-orange">
          Criar transação
        </button>
      </form>
    </div>
  );
};

export default CreateFunctionForm;
