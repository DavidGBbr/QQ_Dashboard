import ListItems from "@/components/ListItems";
import React from "react";
import { FaUserCog } from "react-icons/fa";

const Profiles = () => {
  const profiles = [
    {
      id: 0,
      name: "Administrador",
    },
    {
      id: 1,
      name: "Gestor",
    },
    {
      id: 2,
      name: "Comum",
    },
  ];
  return (
    <main className="container">
      <div className="page-header">
        <h2>Perfis</h2>
        <button className="button-green">Registrar</button>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Digite o nome do perfil..." />
        <button className="button-green">Filtrar</button>
      </div>
      <div>
        <ListItems items={profiles} ItemIcon={FaUserCog} />
      </div>
    </main>
  );
};

export default Profiles;
