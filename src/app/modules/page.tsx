import ListItems from "@/components/ListItems";
import Sidenav from "@/components/Sidenav";
import React from "react";
import "../../styles/form.css";
import { MdOutlineViewModule } from "react-icons/md";

const Modules = () => {
  const modules = [
    {
      id: 0,
      name: "Recursos humanos",
    },
    {
      id: 1,
      name: "Estoque",
    },
  ];
  return (
    <Sidenav>
      <main className="container">
        <div className="page-header">
          <h2>Módulos</h2>
          <button className="button-green">Registrar</button>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Digite o nome do módulo..." />
          <button className="button-green">Filtrar</button>
        </div>
        <div>
          <ListItems items={modules} ItemIcon={MdOutlineViewModule} />
        </div>
      </main>
    </Sidenav>
  );
};

export default Modules;
