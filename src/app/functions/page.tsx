import ListItems from "@/components/ListItems";
import React from "react";
import "../../styles/form.css";
import { MdReceiptLong } from "react-icons/md";

const Functions = () => {
  const functions = [
    {
      id: 0,
      name: "Visualizar Dados Pessoais - (Gerenciar Dados de Funcionários)",
    },
    {
      id: 1,
      name: "Aprovar Alterações Salariais - (Gerenciar Salários)",
    },
    {
      id: 2,
      name: "Adicionar Produto - (Gerenciar estoque)",
    },
    {
      id: 3,
      name: "Registrar Recebimento - (Registrar Entrada de Produtos)",
    },
  ];
  return (
    <main className="container">
      <div className="page-header">
        <h2>Funções</h2>
        <button className="button-green">Registrar</button>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Digite o nome da função..." />
        <button className="button-green">Filtrar</button>
      </div>
      <div>
        <ListItems items={functions} ItemIcon={MdReceiptLong} />
      </div>
    </main>
  );
};

export default Functions;
