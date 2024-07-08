"use client";

import RedirectBtn from "@/components/RedirectBtn";
import UpdateFunctionForm from "@/components/forms/functions/UpdateFunctionForm";
import { api } from "@/services/apiClient";
import { useEffect, useState } from "react";

type PageParams = {
  params: {
    id: number | string;
  };
};

const UpdateFunctionPage = ({ params }: PageParams) => {
  const [_function, setFunction] = useState();

  useEffect(() => {
    const getFunction = async () => {
      const response = await api.get(`function/${params.id}`);
      const data = await response.data;
      setFunction(data);
    };

    getFunction();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/functions">{"< Voltar"}</RedirectBtn>
        <h2>Editar função</h2>
      </div>
      {_function && <UpdateFunctionForm data={_function} />}
    </main>
  );
};

export default UpdateFunctionPage;
