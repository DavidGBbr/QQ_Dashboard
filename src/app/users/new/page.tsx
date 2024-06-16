"use client";
import React from "react";
import "../../../styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { createUser } from "@/actions/CreateUser";
import CreateUserForm from "@/components/forms/users/CreateUserForm";

const CreateUserPage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/users">{"< Voltar"}</RedirectBtn>
        <h2>Criar usuário</h2>
      </div>

      <CreateUserForm />
    </main>
  );
};

export default CreateUserPage;
