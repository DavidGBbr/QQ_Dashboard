import { api } from "@/services/apiClient";
import { ItemType } from "@/types/Item";
import { UserType } from "@/types/User";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
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
  const { user } = useContext(AuthContext);

  const handleDeleteClick = (user: ItemType) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = async () => {
    if (selectedUser?.id === user?.userId) {
      alert("Usuário não pode se deletar!");
      handleCloseModal();
      return;
    }
    if (selectedUser) {
      try {
        const response = await api.delete(`/user/${selectedUser.id}`);

        if (response.status !== 200) {
          throw new Error("Failed to delete the user");
        }

        const updatedUsers = users.filter(
          (user) => user.id !== selectedUser.id
        );
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);

        alert("Usuário deletado com sucesso!");
      } catch (error) {
        alert("Falha ao deletar o usuário");
        console.error("Failed to delete the user:", error);
      } finally {
        handleCloseModal();
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
            updatePath="users/update"
            detailPath="users/detail"
            emptyDataText="Nenhum usuário encontrado..."
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
