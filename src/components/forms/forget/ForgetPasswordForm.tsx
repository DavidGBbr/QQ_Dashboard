"use client";
import { forgetFunction } from "@/actions/forget/ForgetFunction";
import { SubmitBtn } from "@/components/SubmitBtn";
import { AuthContext } from "@/context/AuthContext";
import { setCookie } from "nookies";
import { useContext, useState } from "react";

const ForgetPasswordForm = () => {
  const { setEmail } = useContext(AuthContext);
  const [email, setEmailInput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await forgetFunction(email);
      setEmail(email);
      setCookie(undefined, "email", email, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      alert("Link de recuperação enviado com sucesso!");
    } catch (error) {
      alert("Erro ao enviar link de recuperação");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        placeholder="Digite seu email..."
        value={email}
        onChange={(e) => setEmailInput(e.target.value)}
        required
      />
      <SubmitBtn>Enviar link de recuperação</SubmitBtn>
    </form>
  );
};

export default ForgetPasswordForm;
