"use client";
import { createUser } from "@/actions/users/CreateUser";
import { SubmitBtn } from "@/components/SubmitBtn";
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
            required
          />
        </label>
        <label htmlFor="email">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o email do usuário..."
            required
          />
        </label>
        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite a senha do usuário..."
            required
          />
        </label>
        <SubmitBtn>Criar usuário</SubmitBtn>
      </form>
    </div>
  );
};

export default CreateUserForm;
