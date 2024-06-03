"use client";
import React from "react";
import "../../../styles/form.css";
import Sidenav from "@/components/Sidenav";
import RedirectBtn from "@/components/RedirectBtn";
import { createModule } from "@/actions/CreateModule";
import { SubmitBtn } from "@/components/SubmitBtn";

const CreateModulePage = () => {
  return (
    <Sidenav>
      <main className="container">
        <div className="page-header">
          <RedirectBtn path="/modules">{"< Voltar"}</RedirectBtn>
          <h2>Criar módulo</h2>
        </div>

        <div className="form-wrapper">
          <form action={createModule} className="form-container">
            <label htmlFor="nameModule">
              <span>Nome do módulo:</span>
              <input
                type="text"
                name="nameModule"
                id="nameModule"
                placeholder="Digite o nome do módulo..."
              />
            </label>
            <SubmitBtn>Criar módulo</SubmitBtn>
          </form>
        </div>
      </main>
    </Sidenav>
  );
};

export default CreateModulePage;
