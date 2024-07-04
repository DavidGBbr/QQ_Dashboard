"use client";
import React from "react";
import { TbError404 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import "@/styles/not-found.css";

const Page404 = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="not-found-content">
      <TbError404 size={300} style={{ color: "#fba931" }} />
      <h2>Página não encontrada...</h2>
      <button onClick={handleBack}>Voltar</button>
    </main>
  );
};

export default Page404;
