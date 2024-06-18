"use client";
import { createUser } from "@/actions/CreateUser";
import React from "react";

const CreateUserForm = () => {
  return (
    <div className="form-wrapper">
      <form action={createUser} className="form-container">
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
  );
};

export default CreateUserForm;