"use client";
import { createTransaction } from "@/actions/transactions/CreateTransaction";
import { SubmitBtn } from "@/components/SubmitBtn";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type ModuleType = {
  moduleId: number;
  name: string;
};

const CreateTransactionForm = () => {
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [selectedModule, setSelectedModule] = useState<string>("");
  const [transactionName, setTransactionName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const getModules = async () => {
      const response = await fetch("http://localhost:3333/module");
      const modulesData = await response.json();
      setModules(modulesData);
    };
    getModules();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await createTransaction(formData);
    router.push("/transactions");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="module">
          <span>Nome do módulo:</span>
          <select
            name="module"
            id="module"
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
          >
            <option value="" disabled>
              Selecione um módulo
            </option>
            {modules.map((module) => (
              <option key={module.moduleId} value={module.moduleId}>
                {module.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="transaction">
          <span>Nome da transação:</span>
          <input
            type="text"
            name="transaction"
            id="transaction"
            placeholder="Digite o nome da transação..."
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </label>
        <SubmitBtn>Criar transação</SubmitBtn>
      </form>
    </div>
  );
};

export default CreateTransactionForm;
