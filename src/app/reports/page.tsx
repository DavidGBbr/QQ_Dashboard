"use client";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import Sidenav from "@/components/Sidenav";

const ReportsPage = () => {
  return (
    <Sidenav>
      <main className="container">
        <div className="page-header">
          <RedirectBtn path="/users">{"< Voltar"}</RedirectBtn>
          <h2>Relatórios</h2>
        </div>
      </main>
    </Sidenav>
  );
};

export default ReportsPage;
