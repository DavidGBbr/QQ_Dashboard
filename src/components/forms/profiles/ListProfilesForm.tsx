"use client";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
import { ItemType } from "@/types/Item";
import { ProfileType } from "@/types/Profile";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
        const response = await fetch(
          `http://localhost:3333/profile/${selectedProfile.id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete the profile");
        }

        const updatedProfiles = profiles.filter(
          (profile) => profile.id !== selectedProfile.id
        );

        setProfiles(updatedProfiles);
        setFilteredProfiles(updatedProfiles);

        toast.success("Perfil deletado com sucesso!");
      } catch (error) {
        toast.error("Falha ao deletar o perfil");
        console.error("Failed to delete the profile: ", error);
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
