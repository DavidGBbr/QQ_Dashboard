import React from "react";
import "@/styles/form.css";
import CreateProfileForm from "@/components/forms/profiles/CreateProfileForm";
import RedirectBtn from "@/components/RedirectBtn";

const CreateProfilePage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="profiles">{"< Voltar"}</RedirectBtn>
        <h2>Criar perfil</h2>
      </div>

      <CreateProfileForm />
    </main>
  );
};

export default CreateProfilePage;
