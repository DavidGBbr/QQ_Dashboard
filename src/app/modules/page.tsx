import ListItems from "@/components/ListItems";
import Sidenav from "@/components/Sidenav";
import React from "react";
import "../../styles/form.css";
import { MdOutlineViewModule } from "react-icons/md";
import { ModuleType } from "@/types/Module";
import RedirectBtn from "@/components/RedirectBtn";

const Modules = async () => {
  const response = await fetch("http://localhost:3333/module", {
    next: { revalidate: 0 },
  });
  const data = (await response.json()) as ModuleType[];

  const modules = data.map((item) => ({
    id: item.moduleId,
    name: item.name,
  }));

  return (
    <Sidenav>
      <main className="container">
        <div className="page-header">
          <h2>Módulos</h2>
          <RedirectBtn path="modules/new">Registrar</RedirectBtn>
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
