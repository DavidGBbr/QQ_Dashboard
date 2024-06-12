import React from "react";
import "../../../styles/form.css";

const CreateProfilePage = () => {
  return (
    <main className="container">
      <div className="page-header">
        <button className="button-green">{"< Voltar"}</button>
        <h2>Criar perfil</h2>
      </div>

      <div className="form-wrapper">
        <form action="" className="form-container">
          <label htmlFor="profile">
            <span>Nome do perfil:</span>
            <input
              type="text"
              name="profile"
              id="profile"
              placeholder="Digite o nome do perfil..."
            />
          </label>

          <button className="accordion">Módulos</button>
          <div className="panel">
            <label htmlFor="estoque">
              <input type="checkbox" name="estoque" id="estoque" />
              <span>Estoque</span>
            </label>
            <label htmlFor="recursos_humanos">
              <input
                type="checkbox"
                name="recursos_humanos"
                id="recursos_humanos"
              />
              <span>Recursos humanos</span>
            </label>
          </div>

          <button className="accordion">Transações</button>
          <div className="panel">
            <p>Estoque</p>
            <label htmlFor="gerenciar_estoque">
              <input
                type="checkbox"
                name="gerenciar_estoque"
                id="gerenciar_estoque"
              />
              <span>Gerenciar Estoque</span>
            </label>
            <label htmlFor="registrar_entrada_de_produtos">
              <input
                type="checkbox"
                name="registrar_entrada_de_produtos"
                id="registrar_entrada_de_produtos"
              />
              <span>Registrar Entrada de Produtos</span>
            </label>
            <label htmlFor="registrar_saida_de_produtos">
              <input
                type="checkbox"
                name="registrar_saida_de_produtos"
                id="registrar_saida_de_produtos"
              />
              <span>Registrar Saída de Produtos</span>
            </label>
            <p>{"> Recursos Humanos"}</p>
          </div>

          <button className="accordion">Funções</button>
          <div className="panel">
            <p>Estoque</p>
            <label htmlFor="atualizar_estoque">
              <input
                type="checkbox"
                name="atualizar_estoque"
                id="atualizar_estoque"
              />
              <span>Atualizar estoque</span>
            </label>
            <label htmlFor="registrar_recebimento">
              <input
                type="checkbox"
                name="registrar_recebimento"
                id="registrar_recebimento"
              />
              <span>Registrar Recebimento</span>
            </label>
            <label htmlFor="registrar_venda">
              <input
                type="checkbox"
                name="registrar_venda"
                id="registrar_venda"
              />
              <span>Registrar Venda</span>
            </label>
            <p>{"> Recursos Humanos"}</p>
          </div>

          <button type="submit" className="button-orange">
            Criar perfil
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateProfilePage;
