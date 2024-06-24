"use client";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
import { ItemType } from "@/types/Item";
import { ModuleType } from "@/types/Module";
import React, { useEffect, useState } from "react";
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
  const [filteredModules, setFilteredModules] = useState<ItemType[]>(modules);
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

  const handleSearch = (searchTerm: string) => {
    const filtered = modules.filter((module) =>
      module.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredModules(filtered);
  };

  useEffect(() => {
    setFilteredModules(modules);
  }, [modules]);

  return (
    <>
      <main className="container">
        <ItemSearchBar
          title="Módulos"
          redirectPath="modules/new"
          inputPlaceholder="Digite o nome do módulo..."
          onSearch={handleSearch}
        />
        <div>
          <ListItems
            items={filteredModules}
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
