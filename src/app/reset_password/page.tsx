import React from "react";
import "@/styles/form.css";
import "@/styles/forget.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redefinir senha",
};

const ResetPage = () => {
  return (
    <main className="container">
      <h1>Redefina a senha da sua conta</h1>
      <p>Digite sua nova senha:</p>
      <form action="" className="form-container">
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha..."
        />

        <button type="submit" className="button-green">
          Redefinir senha
        </button>
      </form>
    </main>
  );
};

export default ResetPage;
