import { api } from "@/services/apiClient";
import { ItemType } from "@/types/Item";
import { ModuleType } from "@/types/Module";
import React, { useEffect, useState } from "react";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
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

  const handleDeleteModule = async () => {
    if (selectedModule) {
      try {
        const response = await api.delete(`/module/${selectedModule.id}`);

        if (response.status !== 200) {
          throw new Error("Failed to delete the module");
        }

        const updatedModules = modules.filter(
          (module) => module.id !== selectedModule.id
        );

        setModules(updatedModules);
        setFilteredModules(updatedModules);

        alert("Módulo deletado com sucesso!");
      } catch (error) {
        alert("Falha ao deletar o módulo");
        console.error("Failed to delete the module:", error);
      } finally {
        handleCloseModal();
      }
    }
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
            updatePath="modules/update"
            detailPath="modules/detail"
            emptyDataText="Nenhum módulo encontrado..."
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
