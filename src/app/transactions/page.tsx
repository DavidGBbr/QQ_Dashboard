import ListItems from "@/components/ListItems";
import Sidenav from "@/components/Sidenav";
import React from "react";
import "../../styles/form.css";
import { MdOutlineWindow } from "react-icons/md";

const Transactions = () => {
  const transactions = [
    {
      id: 0,
      name: "Gerenciar Dados de Funcionários - (Recursos humanos)",
    },
    {
      id: 1,
      name: "Gerenciar Salários - (Recursos humanos)",
    },
    {
      id: 2,
      name: "Gerenciar estoque - (Estoque)",
    },
    {
      id: 3,
      name: "Registrar Entrada de Produtos - (Estoque)",
    },
  ];
  return (
    <Sidenav>
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
    </Sidenav>
  );
};

export default Transactions;
