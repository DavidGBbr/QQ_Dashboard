import React from "react";
import "../../../styles/form.css";
import Sidenav from "@/components/Sidenav";

const CreateUserPage = () => {
  return (
    <Sidenav>
      <main className="container">
        <div className="page-header">
          <button className="button-green">{"< Voltar"}</button>
          <h2>Criar usuário</h2>
        </div>

        <div className="form-wrapper">
          <form action="" className="form-container">
            <label htmlFor="username">
              <span>Nome do usuário:</span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Digite o nome do usuário..."
              />
            </label>
            <label htmlFor="email">
              <span>Email:</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite o email do usuário..."
              />
            </label>
            <label htmlFor="password">
              <span>Senha:</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite a senha do usuário..."
              />
            </label>
            <button type="submit" className="button-orange">
              Criar usuário
            </button>
          </form>
        </div>
      </main>
    </Sidenav>
  );
};

export default CreateUserPage;
