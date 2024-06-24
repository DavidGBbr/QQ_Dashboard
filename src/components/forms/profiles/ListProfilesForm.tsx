"use client";
import DeleteModal from "@/components/DeleteModal";
import ItemSearchBar from "@/components/ItemSearchBar";
import ListItems from "@/components/ListItems";
import { ItemType } from "@/types/Item";
import { ProfileType } from "@/types/Profile";
import { useEffect, useState } from "react";
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

  const handleDeleteProfile = () => {
    alert("Delete profile");
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
            updatePath={"profiles/update"}
          />
        </div>
      </main>
      <DeleteModal
        title="Deseja excluir a função?"
        btnText="Excluir a função"
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
