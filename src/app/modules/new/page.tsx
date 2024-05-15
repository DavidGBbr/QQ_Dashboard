import React from "react";
import "../../../styles/form.css";

const CreateUserPage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <button className="button-green">{"< Voltar"}</button>
        <h2>Criar módulo</h2>
      </div>

      <div className="form-wrapper">
        <form action="" className="form-container">
          <label htmlFor="module">
            <span>Nome do módulo:</span>
            <input
              type="text"
              name="module"
              id="module"
              placeholder="Digite o nome do módulo..."
            />
          </label>
          <button type="submit" className="button-orange">
            Criar módulo
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateUserPage;
