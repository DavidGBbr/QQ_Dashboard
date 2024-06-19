"use client";
import DeleteModal from "@/components/DeleteModal";
import ListItems from "@/components/ListItems";
import RedirectBtn from "@/components/RedirectBtn";
import { ItemType } from "@/types/Item";
import { TransactionType } from "@/types/Transaction";
import { useState } from "react";
import { MdOutlineWindow } from "react-icons/md";

type TransactionProps = {
  data: TransactionType[];
};

const ListTransactionsForm = ({ data }: TransactionProps) => {
  const [transactions, setTransactions] = useState<ItemType[]>(
    data.map((transaction) => ({
      id: transaction.transactionId,
      name: `${transaction.transactionName} - ${transaction.moduleName}`,
    }))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<ItemType | null>(null);

  const handleDeleteClick = (transaction: ItemType) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleDeleteTransaction = async () => {
    if (selectedTransaction) {
      try {
        await fetch(
          `http://localhost:3333/transaction/${selectedTransaction.id}`,
          {
            method: "DELETE",
          }
        );
        handleCloseModal();
        const response = await fetch("http://localhost:3333/transaction");
        const data = (await response.json()) as TransactionType[];
        setTransactions(
          data.map((transaction) => ({
            id: transaction.transactionId,
            name: `${transaction.transactionName} - ${transaction.moduleName}`,
          }))
        );
      } catch (error) {
        console.error("Failed to delete the transaction:", error);
      }
    }
  };

  return (
    <>
      <main className="container">
        <div className="page-header">
          <h2>Transações</h2>
          <RedirectBtn path="transactions/new">Registrar</RedirectBtn>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Digite o nome da transação..." />
          <button className="button-green">Filtrar</button>
        </div>
        <div>
          <ListItems
            items={transactions}
            ItemIcon={MdOutlineWindow}
            onDelete={handleDeleteClick}
            updatePath={"transactions/update"}
          />
        </div>
      </main>
      <DeleteModal
        title="Deseja excluir a transação?"
        btnText="Excluir a transação"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        icon={MdOutlineWindow}
        item={selectedTransaction ? selectedTransaction : null}
        onDelete={handleDeleteTransaction}
      />
    </>
  );
};

export default ListTransactionsForm;
