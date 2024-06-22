"use client";
import DeleteModal from "@/components/DeleteModal";
import ListItems from "@/components/ListItems";
import RedirectBtn from "@/components/RedirectBtn";
import { ItemType } from "@/types/Item";
import { ProfileType } from "@/types/Profile";
import { useState } from "react";
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

  return (
    <>
      <main className="container">
        <div className="page-header">
          <h2>Perfis</h2>
          <RedirectBtn path="profiles/new">Registrar</RedirectBtn>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Digite o nome do perfil..." />
          <button className="button-green">Filtrar</button>
        </div>
        <div>
          <ListItems
            items={profiles}
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
