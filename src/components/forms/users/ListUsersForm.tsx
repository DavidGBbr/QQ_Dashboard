"use client";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
import { ItemType } from "@/types/Item";
import { UserType } from "@/types/User";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [filteredUsers, setFilteredUsers] = useState<ItemType[]>(users);
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
        const updatedUsers = data.map((user) => ({
          id: user.userId,
          name: user.name,
          email: user.email,
          profile: user.profile.name,
        }));
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
      } catch (error) {
        console.error("Failed to delete the user:", error);
      }
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = users.filter((transaction) =>
      transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <>
      <main className="container">
        <ItemSearchBar
          title="Usuários"
          redirectPath="users/new"
          inputPlaceholder="Digite o nome do usuário..."
          onSearch={handleSearch}
        />
        <div>
          <ListItems
            items={filteredUsers}
            ItemIcon={FaUser}
            onDelete={handleDeleteClick}
            updatePath={"users/update"}
          />
        </div>
      </main>
      <DeleteModal
        title="Deseja excluir o usuário?"
        btnText="Excluir o usuário"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        icon={FaUser}
        item={selectedUser ? selectedUser : null}
        onDelete={handleDeleteUser}
      />
    </>
  );
};

export default ListUsersForm;
