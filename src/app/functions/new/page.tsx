import React from "react";
import "@/styles/form.css";

const CreateFunctionPage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <button className="button-green">{"< Voltar"}</button>
        <h2>Criar função</h2>
      </div>

      <div className="form-wrapper">
        <form action="" className="form-container">
          <label htmlFor="transaction">
            <span>Nome da transação:</span>
            <select name="transactions" id="transactions">
              <option value="gerenciar_dados_de_funcionarios">
                Gerenciar Dados de Funcionários
              </option>
              <option value="gerenciar_salarios">Gerenciar Salários</option>
              <option value="gerenciar_estoque">Gerenciar Estoque</option>
              <option value="registrar_entrada_de_produtos">
                Registrar Entrada de Produtos
              </option>
            </select>
          </label>
          <label htmlFor="function">
            <span>Nome da função:</span>
            <input
              type="text"
              name="function"
              id="function"
              placeholder="Digite o nome do função..."
            />
          </label>
          <button type="submit" className="button-orange">
            Criar função
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateFunctionPage;
