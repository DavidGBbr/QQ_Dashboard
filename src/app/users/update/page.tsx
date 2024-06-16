import React from "react";
import "../../../styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import UpdateUserForm from "@/components/forms/users/UpdateUserForm";

const UpdateUserPage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/users">{"< Voltar"}</RedirectBtn>
        <h2>Editar usuário</h2>
      </div>

      <UpdateUserForm />
    </main>
  );
};

export default UpdateUserPage;
