import React from "react";
import "../../../styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import CreateModuleForm from "@/components/forms/modules/CreateModuleForm";

const CreateModulePage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/modules">{"< Voltar"}</RedirectBtn>
        <h2>Criar módulo</h2>
      </div>

      <CreateModuleForm />
    </main>
  );
};

export default CreateModulePage;
