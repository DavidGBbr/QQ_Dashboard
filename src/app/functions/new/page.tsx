import React from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import CreateFunctionForm from "@/components/forms/functions/CreateFunctionForm";

const CreateFunctionPage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/functions">{"< Voltar"}</RedirectBtn>
        <h2>Criar função</h2>
      </div>

      <CreateFunctionForm />
    </main>
  );
};

export default CreateFunctionPage;
