"use client";

import RedirectBtn from "@/components/RedirectBtn";
import UpdateModuleForm from "@/components/forms/modules/UpdateModuleForm";
import { api } from "@/services/apiClient";
import { useEffect, useState } from "react";

type PageParams = {
  params: {
    id: number | string;
  };
};

const UpdateModulePage = ({ params }: PageParams) => {
  const [module, setModule] = useState();

  useEffect(() => {
    const getModule = async () => {
      const response = await api.get(`/module/${params.id}`);
      const data = await response.data;
      setModule(data);
    };

    getModule();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/modules">{"< Voltar"}</RedirectBtn>
        <h2>Editar módulo</h2>
      </div>
      {module && <UpdateModuleForm data={module} />}
    </main>
  );
};

export default UpdateModulePage;
