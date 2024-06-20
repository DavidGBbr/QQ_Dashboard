"use client";
import DeleteModal from "@/components/DeleteModal";
import ListItems from "@/components/ListItems";
import RedirectBtn from "@/components/RedirectBtn";
import { FunctionType } from "@/types/Function";
import { ItemType } from "@/types/Item";
import { useState } from "react";
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

  const handleDeleteFunction = () => {
    alert("Delete function");
  };

  return (
    <>
      <main className="container">
        <div className="page-header">
          <h2>Funções</h2>
          <RedirectBtn path="/functions/new">Registrar</RedirectBtn>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Digite o nome da função..." />
          <button className="button-green">Filtrar</button>
        </div>
        <div>
          <ListItems
            items={functions}
            ItemIcon={MdReceiptLong}
            onDelete={handleDeleteClick}
            updatePath={"functions/update"}
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
