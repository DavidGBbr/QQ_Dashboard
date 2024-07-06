"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { ModuleType } from "@/types/Module";
import DetailModuleForm from "@/components/forms/modules/DetailModuleForm";
import { api } from "@/services/apiClient";

type PageParams = {
  params: {
    id: number | string;
  };
};

const DetailModulePage = ({ params }: PageParams) => {
  const [module, setModule] = useState<ModuleType>();

  useEffect(() => {
    const getModule = async () => {
      const response = await api.get(
        `http://localhost:3333/module/${params.id}`
      );
      const data = (await response.data) as ModuleType;
      setModule(data);
    };

    getModule();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/modules">{"< Voltar"}</RedirectBtn>
        <h2>Detalhes do módulo</h2>
      </div>
      {module && <DetailModuleForm data={module} />}
    </main>
  );
};

export default DetailModulePage;
