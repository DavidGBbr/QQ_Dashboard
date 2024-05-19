import Sidenav from "@/components/Sidenav";
import React from "react";
import "../../styles/form.css";
import ListItems from "@/components/ListItems";
import { FaUser } from "react-icons/fa";

const Users: React.FC = () => {
  const users = [
    {
      id: 0,
      name: "Matheus Batista",
      email: "matheusbatista@gmail.com",
      profile: "Administrador",
    },
    {
      id: 1,
      name: "Vanessa Marques",
      email: "vanessemarques@gmail.com",
      profile: "Gestor",
    },
    {
      id: 2,
      name: "Jorge Bastos",
      email: "jorgebastos@gmail.com",
      profile: "Comum",
    },
  ];

  return (
    <Sidenav>
      <main className="container">
        <div className="page-header">
          <h2>Usuários</h2>
          <button className="button-green">Registrar</button>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Digite o nome do usuário..." />
          <button className="button-green">Filtrar</button>
        </div>
        <div>
          <ListItems items={users} ItemIcon={FaUser} />
        </div>
      </main>
    </Sidenav>
  );
};

export default Users;
