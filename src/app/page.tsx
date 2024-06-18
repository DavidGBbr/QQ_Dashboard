"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/form.css";
import { authUser } from "@/actions/AuthUser";
import { SubmitBtn } from "@/components/SubmitBtn";

const Login = () => {
  return (
    <main className="container">
      <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />

      <form action={authUser} className="form-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email..."
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha..."
        />
        <SubmitBtn>Acessar</SubmitBtn>
        <Link href="/forget">Esqueceu sua senha?</Link>
      </form>
    </main>
  );
};

export default Login;
