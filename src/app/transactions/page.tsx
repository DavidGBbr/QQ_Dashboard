import ListItems from "@/components/ListItems";
import React from "react";
import "../../styles/form.css";
import { MdOutlineWindow } from "react-icons/md";
import { ModuleTransactionType } from "@/types/ModuleTransaction";

const Transactions = async () => {
  const response = await fetch("http://localhost:3333/transaction");
  const data = (await response.json()) as ModuleTransactionType[];

  console.log(data);

  const transactions = data.map((item) => ({
    id: item.moduleId,
    name: `${item.transactionName} - (${item.moduleName})`,
  }));

  return (
    <main className="container">
      <div className="page-header">
        <h2>Transações</h2>
        <button className="button-green">Registrar</button>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Digite o nome da transação..." />
        <button className="button-green">Filtrar</button>
      </div>
      <div>
        <ListItems items={transactions} ItemIcon={MdOutlineWindow} />
      </div>
    </main>
  );
};

export default Transactions;
