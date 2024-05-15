import React from "react";
import "../../styles/form.css";
import "../../styles/forget.css";

const ForgetPage = () => {
  return (
    <main className="container">
      <h1>Esqueceu sua senha?</h1>
      <p>Insira seu e-mail e enviaremos um link para recuperação de senha.</p>
      <form action="" className="form-container">
        <input type="email" id="email" placeholder="Digite seu email..." />
        <button type="submit" className="button-green">
          Enviar link de recuperação
        </button>
      </form>
    </main>
  );
};

export default ForgetPage;
