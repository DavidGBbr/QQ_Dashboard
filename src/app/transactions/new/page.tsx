import React from "react";
import "../../../styles/form.css";
import Sidenav from "@/components/Sidenav";

const CreateTransactionPage = () => {
  return (
    <Sidenav>
      <main className="container">
        <div className="page-header">
          <button className="button-green">{"< Voltar"}</button>
          <h2>Criar transação</h2>
        </div>

        <div className="form-wrapper">
          <form action="" className="form-container">
            <label htmlFor="module">
              <span>Nome do módulo:</span>
              <select name="modules" id="modules">
                <option value="recursos_humanos">Recursos humanos</option>
                <option value="estoque">Estoque</option>
              </select>
            </label>
            <label htmlFor="transaction">
              <span>Nome da transação:</span>
              <input
                type="text"
                name="transaction"
                id="transaction"
                placeholder="Digite o nome do transação..."
              />
            </label>
            <button type="submit" className="button-orange">
              Criar transação
            </button>
          </form>
        </div>
      </main>
    </Sidenav>
  );
};

export default CreateTransactionPage;
