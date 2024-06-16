"use client";
import DeleteModal from "@/components/DeleteModal";
import ListItems from "@/components/ListItems";
import RedirectBtn from "@/components/RedirectBtn";
import { ItemType } from "@/types/Item";
import { UserType } from "@/types/User";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

type UserProps = {
  data: UserType[];
};

const ListUsersForm = ({ data }: UserProps) => {
  const [users, setUsers] = useState<ItemType[]>(
    data.map((user) => ({
      id: user.userId,
      name: user.name,
      email: user.email,
      profile: user.profile.name,
    }))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<ItemType | null>(null);

  const router = useRouter();

  const handleDeleteClick = (user: ItemType) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = async () => {
    if (selectedUser) {
      try {
        await fetch(`http://localhost:3333/user/${selectedUser.id}`, {
          method: "DELETE",
        });
        handleCloseModal();
        const response = await fetch("http://localhost:3333/user");
        const data = (await response.json()) as UserType[];
        setUsers(
          data.map((user) => ({
            id: user.userId,
            name: user.name,
            email: user.email,
            profile: user.profile.name,
          }))
        );
      } catch (error) {
        console.error("Failed to delete the user:", error);
      }
    }
  };

  return (
    <>
      <main className="container">
        <div className="page-header">
          <h2>Usuários</h2>
          <RedirectBtn path="users/new">Registrar</RedirectBtn>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Digite o nome do usuário..." />
          <button className="button-green">Filtrar</button>
        </div>
        <div>
          <ListItems
            items={users}
            ItemIcon={FaUser}
            onDelete={handleDeleteClick}
          />
        </div>
      </main>
      <DeleteModal
        title="Deseja excluir o usuário?"
        btnText="Excluir o usuário"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedUser ? selectedUser : null}
        onDelete={handleDeleteUser}
      />
    </>
  );
};

export default ListUsersForm;
