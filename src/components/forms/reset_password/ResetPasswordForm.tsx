"use client";
import { resetFunction } from "@/actions/reset_password/resetFunction";
import { SubmitBtn } from "@/components/SubmitBtn";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";
import toast from "react-hot-toast";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const { email } = useContext(AuthContext);
  const router = useRouter();
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email não encontrado");
      return;
    }

    try {
      const success = await resetFunction({
        email: email,
        password,
        token,
      });
      if (success) {
        toast.success("Senha redefinida com sucesso!");
        router.push("/");
      }
    } catch (error) {
      toast.error("Falha ao redefinir a senha. Tente novamente.");
      console.error("Error resetting password:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="password"
        id="password"
        placeholder="Digite sua nova senha..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <SubmitBtn>Redefinir senha</SubmitBtn>
    </form>
  );
};

export default ResetPasswordForm;
