"use client";
import "@/styles/forget.css";
import "@/styles/form.css";
import "@/styles/globals.css";
import "@/styles/modal.css";
import "@/styles/sidenav.css";
import RedirectBtn from "@/components/RedirectBtn";
import Sidenav from "@/components/Sidenav";
import { useEffect, useState } from "react";
import { ReportsType } from "@/types/Reports";

const ReportsPage = () => {
  const [reports, setReports] = useState<ReportsType>();
  useEffect(() => {
    const getReports = async () => {
      const response = await fetch("http://127.0.0.1:5000/reports");
      const data = await response.json();
      setReports(data);
    };

    getReports();
  }, []);
  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/users">{"< Voltar"}</RedirectBtn>
        <h2>Relatórios</h2>
      </div>
      <div className="form-wrapper">
        <table className="details-table">
          <tbody>
            <tr>
              <th>Total de usuários</th>
              <td>{reports?.user_count}</td>
            </tr>
            <tr>
              <th>Total de perfis</th>
              <td>{reports?.profile_count}</td>
            </tr>
            <tr>
              <th>Total de módulos</th>
              <td>{reports?.module_count}</td>
            </tr>
            <tr>
              <th>Total de transações</th>
              <td>{reports?.transaction_count}</td>
            </tr>
            <tr>
              <th>Total de funções</th>
              <td>{reports?.function_count}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ReportsPage;
