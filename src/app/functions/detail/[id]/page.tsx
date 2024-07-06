"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { FunctionType } from "@/types/Function";
import DetailFunctionForm from "@/components/forms/functions/DetailFunctionForm";
import { api } from "@/services/apiClient";

type PageParams = {
  params: {
    id: number | string;
  };
};

const DetailFunctionPage = ({ params }: PageParams) => {
  const [_function, setFunction] = useState<FunctionType>();

  useEffect(() => {
    const getFunction = async () => {
      const response = await api.get(`/function/${params.id}`);
      const data = (await response.data) as FunctionType;
      setFunction(data);
    };

    getFunction();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/functions">{"< Voltar"}</RedirectBtn>
        <h2>Detalhes da função</h2>
      </div>
      {_function && <DetailFunctionForm data={_function} />}
    </main>
  );
};

export default DetailFunctionPage;
