import React from "react";
import "@/styles/form.css";
import "@/styles/forget.css";
import ForgetPasswordForm from "@/components/forms/forget/ForgetPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esqueceu sua senha?",
};

const ForgetPage = () => {
  return (
    <main className="container">
      <h1>Esqueceu sua senha?</h1>
      <p>Insira seu e-mail e enviaremos um link para recuperação de senha.</p>
      <ForgetPasswordForm />
    </main>
  );
};

export default ForgetPage;
