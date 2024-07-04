import React from "react";
import "@/styles/form.css";
import "@/styles/reset.css";
import { Metadata } from "next";
import ResetPasswordForm from "@/components/forms/reset_password/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Redefinir senha",
};

type PageParams = {
  params: {
    token: string;
  };
};

const ResetPage = ({ params }: PageParams) => {
  return (
    <main className="reset-content">
      <h1>Redefina a senha da sua conta</h1>
      <p>Digite sua nova senha:</p>
      <ResetPasswordForm token={params.token} />
    </main>
  );
};

export default ResetPage;
