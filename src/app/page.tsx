"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/styles/form.css";
import { SubmitBtn } from "@/components/SubmitBtn";
import { AuthContext } from "@/context/AuthContext";
import "@/styles/login.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const success = await signIn({ email, password });
    setLoading(false);
    if (success) {
      router.push("/users");
    }
  };

  return (
    <main className="login-content">
      <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={loading}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={loading}
          required
        />
        <SubmitBtn disabled={loading}>
          {loading ? "Carregando..." : "Acessar"}
        </SubmitBtn>
        <Link href="/forget">Esqueceu sua senha?</Link>
      </form>
    </main>
  );
};

export default Login;
