import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/form.css";

const page = () => {
  return (
    <main className="container">
      <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />

      <form action="" className="form-container">
        <input type="text" id="email" placeholder="Digite seu email..." />
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha..."
        />
        <button type="submit" className="button-green">
          Acessar
        </button>
        <Link href="/forget">Esqueceu sua senha?</Link>
      </form>
    </main>
  );
};

export default page;
