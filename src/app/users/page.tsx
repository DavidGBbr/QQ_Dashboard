import Sidenav from "@/components/Sidenav";
import React from "react";
import "../../styles/form.css";
import ListItems from "@/components/ListItems";
import { FaUser } from "react-icons/fa";
import RedirectBtn from "@/components/RedirectBtn";
import { UserType } from "@/types/User";
import DeleteModal from "@/components/DeleteModal";

const Users = async () => {
  const response = await fetch("http://localhost:3333/user", {
    next: { revalidate: 0 },
  });
  const data = (await response.json()) as UserType[];

  const users = data.map((user) => {
    return {
      id: user.email,
      name: user.name,
      email: user.email,
      profile: user.profile.name,
    };
  });

  return (
    <Sidenav>
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
          <ListItems items={users} ItemIcon={FaUser} />
        </div>
      </main>
      <DeleteModal></DeleteModal>
    </Sidenav>
  );
};

export default Users;
