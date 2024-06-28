"use client";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
import { ItemType } from "@/types/Item";
import { TransactionType } from "@/types/Transaction";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
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
  const [filteredTransactions, setFilteredTransactions] =
    useState<ItemType[]>(transactions);
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
        const response = await fetch(
          `http://localhost:3333/transaction/${selectedTransaction.id}`,
          {
            method: "DELETE",
          }
        );

        const updatedTransactions = transactions.filter(
          (transaction) => transaction.id !== selectedTransaction.id
        );

        setTransactions(updatedTransactions);
        setFilteredTransactions(updatedTransactions);

        toast.success("Transação deletada com sucesso!");
      } catch (error) {
        toast.error("Falha ao deletar a transação");
        console.error("Failed to delete the transaction:", error);
      } finally {
        handleCloseModal();
      }
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = transactions.filter((transaction) =>
      transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  return (
    <>
      <main className="container">
        <ItemSearchBar
          title="Transações"
          redirectPath="transactions/new"
          inputPlaceholder="Digite o nome da transação..."
          onSearch={handleSearch}
        />

        <div>
          <ListItems
            items={filteredTransactions}
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
