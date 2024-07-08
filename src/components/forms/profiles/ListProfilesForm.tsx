import { api } from "@/services/apiClient";
import { ItemType } from "@/types/Item";
import { ProfileType } from "@/types/Profile";
import { useEffect, useState } from "react";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
import { FaUserCog } from "react-icons/fa";

type ProfileProps = {
  data: ProfileType[];
};

const ListProfilesForm = ({ data }: ProfileProps) => {
  const [profiles, setProfiles] = useState<ItemType[]>(
    data.map((profile) => ({
      id: profile.profileId,
      name: profile.name,
    }))
  );
  const [filteredProfiles, setFilteredProfiles] =
    useState<ItemType[]>(profiles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<ItemType | null>(null);

  const handleDeleteClick = (profile: ItemType) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  const handleDeleteProfile = async () => {
    if (selectedProfile) {
      try {
        const response = await api.delete(`/profile/${selectedProfile.id}`);

        if (response.status !== 200) {
          throw new Error("Failed to delete the profile");
        }

        const updatedProfiles = profiles.filter(
          (profile) => profile.id !== selectedProfile.id
        );

        setProfiles(updatedProfiles);
        setFilteredProfiles(updatedProfiles);

        alert("Perfil deletado com sucesso!");
      } catch (error) {
        alert("Falha ao deletar o perfil");
        console.error("Failed to delete the profile:", error);
      } finally {
        handleCloseModal();
      }
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  useEffect(() => {
    setFilteredProfiles(profiles);
  }, [profiles]);

  return (
    <>
      <main className="container">
        <ItemSearchBar
          title="Perfis"
          redirectPath="profiles/new"
          inputPlaceholder="Digite o nome do perfil..."
          onSearch={handleSearch}
        />
        <div>
          <ListItems
            items={filteredProfiles}
            ItemIcon={FaUserCog}
            onDelete={handleDeleteClick}
            updatePath="profiles/update"
            detailPath="profiles/detail"
            emptyDataText="Nenhum perfil encontrado..."
          />
        </div>
      </main>
      <DeleteModal
        title="Deseja excluir o perfil?"
        btnText="Excluir o perfil"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        icon={FaUserCog}
        item={selectedProfile ? selectedProfile : null}
        onDelete={handleDeleteProfile}
      />
    </>
  );
};

export default ListProfilesForm;
