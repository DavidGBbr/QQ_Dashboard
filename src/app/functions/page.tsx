"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import ListFunctionsForm from "@/components/forms/functions/ListFunctionsForm";
import { FunctionType } from "@/types/Function";
import { api } from "@/services/apiClient";

const Functions = () => {
  const [data, setData] = useState<FunctionType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/function");
      const functions = (await response.data) as FunctionType[];
      setData(functions);
    };

    getData();
  }, []);

  return <>{data && <ListFunctionsForm data={data} />}</>;
};

export default Functions;
