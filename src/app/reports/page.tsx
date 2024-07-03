"use client";
import "@/styles/reports.css";
import RedirectBtn from "@/components/RedirectBtn";
import { useEffect, useState } from "react";
import { ReportsType } from "@/types/Reports";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

  const data = {
    labels: ["Usuários", "Perfis", "Módulos", "Transações", "Funções"],
    datasets: [
      {
        label: "Contagem",
        data: [
          reports?.user_count,
          reports?.profile_count,
          reports?.module_count,
          reports?.transaction_count,
          reports?.function_count,
        ],
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  const handleDownloadReport = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/reports-data");
      if (!response.ok) {
        throw new Error("Failed to download report");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "database_contents.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the report:", error);
    }
  };

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/users">{"< Voltar"}</RedirectBtn>
        <h2>Relatórios</h2>
      </div>
      <div className="form-wrapper">
        <button className="reports-btn" onClick={handleDownloadReport}>
          Gerar relatórios
        </button>
        <div className="reports-content">
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
          <div className="chart-wrapper">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportsPage;
