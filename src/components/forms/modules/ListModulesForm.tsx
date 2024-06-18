"use client";
import DeleteModal from "@/components/DeleteModal";
import ListItems from "@/components/ListItems";
import RedirectBtn from "@/components/RedirectBtn";
import { ItemType } from "@/types/Item";
import { ModuleType } from "@/types/Module";
import React, { useState } from "react";
import { MdOutlineViewModule } from "react-icons/md";

type ModuleProps = {
  data: ModuleType[];
};

const ListModulesForm = ({ data }: ModuleProps) => {
  const [modules, setModules] = useState<ItemType[]>(
    data.map((module) => ({
      id: module.moduleId,
      name: module.name,
    }))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<ItemType | null>(null);

  const handleDeleteClick = (module: ItemType) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModule(null);
  };

  const handleDeleteModule = () => {
    alert("Delete module");
  };

  return (
    <>
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
          <ListItems
            items={modules}
            ItemIcon={MdOutlineViewModule}
            onDelete={handleDeleteClick}
            updatePath={"modules/update"}
          />
        </div>
      </main>
      <DeleteModal
        title="Deseja excluir o módulo?"
        btnText="Excluir o módulo"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        icon={MdOutlineViewModule}
        item={selectedModule ? selectedModule : null}
        onDelete={handleDeleteModule}
      />
    </>
  );
};

export default ListModulesForm;
