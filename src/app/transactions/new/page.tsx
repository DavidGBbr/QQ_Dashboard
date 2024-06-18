"use client";
import React from "react";
import "../../../styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import CreateTransactionForm from "@/components/forms/transactions/CreateTransactionForm";

const CreateTransactionPage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/transactions">{"< Voltar"}</RedirectBtn>
        <h2>Criar transação</h2>
      </div>
      <CreateTransactionForm />
    </main>
  );
};

export default CreateTransactionPage;
