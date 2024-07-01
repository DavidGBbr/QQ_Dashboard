"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { UserType } from "@/types/User";
import DetailUserForm from "@/components/forms/users/DetailUserForm";
import { ModuleType } from "@/types/Module";
import DetailModuleForm from "@/components/forms/modules/DetailModuleForm";

type PageParams = {
  params: {
    id: number | string;
  };
};

const DetailModulePage = ({ params }: PageParams) => {
  const [module, setModule] = useState<ModuleType>();

  useEffect(() => {
    const getModule = async () => {
      const response = await fetch(
        `http://localhost:3333/module/${params.id}`,
        {
          next: { revalidate: 0 },
        }
      );
      const data = (await response.json()) as ModuleType;
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
