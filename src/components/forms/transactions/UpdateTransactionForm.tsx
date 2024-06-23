"use client";
import { updateTransaction } from "@/actions/transactions/UpdateTransaction";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type ModuleType = {
  moduleId: number;
  name: string;
};

type ModuleTransactionType = {
  module?: {
    moduleId?: number;
    name?: string;
  };
}[];

type TransactionType = {
  transactionId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  moduleTransaction?: ModuleTransactionType;
};

export type UpdateUserProps = {
  data: TransactionType;
};

const UpdateTransactionForm = ({ data }: UpdateUserProps) => {
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [selectedModule, setSelectedModule] = useState<string>(
    data?.moduleTransaction?.[0]?.module?.moduleId?.toString() || ""
  );
  const [transactionName, setTransactionName] = useState<string>(
    data?.name || ""
  );
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
    formData.append("transactionId", data.transactionId.toString());
    await updateTransaction(formData);
    router.push("/transactions");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="module">
          <span>Nome do módulo:</span>
          <select
            name="moduleId"
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
        <button type="submit" className="button-orange">
          Atualizar transação
        </button>
      </form>
    </div>
  );
};

export default UpdateTransactionForm;
