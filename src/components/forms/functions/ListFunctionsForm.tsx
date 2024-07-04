"use client";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
import RedirectBtn from "@/components/RedirectBtn";
import { FunctionType } from "@/types/Function";
import { ItemType } from "@/types/Item";
import { useEffect, useState } from "react";
import { MdReceiptLong } from "react-icons/md";

type FunctionProps = {
  data: FunctionType[];
};

const ListFunctionsForm = ({ data }: FunctionProps) => {
  const [functions, setFunctions] = useState<ItemType[]>(
    data.map((_function) => ({
      id: _function.functionId,
      name: `${_function.functionName} - ${_function.transactionName}`,
    }))
  );
  const [filteredFunctions, setFilteredFunctions] =
    useState<ItemType[]>(functions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState<ItemType | null>(
    null
  );

  const handleDeleteClick = (_function: ItemType) => {
    setSelectedFunction(_function);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFunction(null);
  };

  const handleDeleteFunction = async () => {
    if (selectedFunction) {
      try {
        const response = await fetch(
          `http://localhost:3333/function/${selectedFunction.id}`,
          {
            method: "DELETE",
          }
        );

        const updatedFunctions = functions.filter(
          (_function) => _function.id !== selectedFunction.id
        );

        setFunctions(updatedFunctions);
        setFilteredFunctions(updatedFunctions);

        alert("Função deletada com sucesso!");
      } catch (error) {
        alert("Falha ao deletar a função");
        console.error("Failed to delete the function:", error);
      } finally {
        handleCloseModal();
      }
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = functions.filter((_function) =>
      _function.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFunctions(filtered);
  };

  useEffect(() => {
    setFilteredFunctions(functions);
  }, [functions]);

  return (
    <>
      <main className="container">
        <ItemSearchBar
          title="Funções"
          redirectPath="functions/new"
          inputPlaceholder="Digite o nome da transação..."
          onSearch={handleSearch}
        />
        <div>
          <ListItems
            items={filteredFunctions}
            ItemIcon={MdReceiptLong}
            onDelete={handleDeleteClick}
            updatePath="functions/update"
            detailPath="functions/detail"
            emptyDataText="Nenhuma função encontrada..."
          />
        </div>
      </main>
      <DeleteModal
        title="Deseja excluir a função?"
        btnText="Excluir a função"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        icon={MdReceiptLong}
        item={selectedFunction ? selectedFunction : null}
        onDelete={handleDeleteFunction}
      />
    </>
  );
};

export default ListFunctionsForm;
