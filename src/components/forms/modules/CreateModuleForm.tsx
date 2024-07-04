"use client";
import { createModule } from "@/actions/modules/CreateModule";
import { SubmitBtn } from "@/components/SubmitBtn";
import React from "react";

const CreateModuleForm = () => {
  return (
    <div className="form-wrapper">
      <form action={createModule} className="form-container">
        <label htmlFor="nameModule">
          <span>Nome do módulo:</span>
          <input
            type="text"
            name="nameModule"
            id="nameModule"
            placeholder="Digite o nome do módulo..."
            required
          />
        </label>
        <SubmitBtn>Criar módulo</SubmitBtn>
      </form>
    </div>
  );
};

export default CreateModuleForm;
