"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import ListFunctionsForm from "@/components/forms/functions/ListFunctionsForm";
import { FunctionType } from "@/types/Function";

const Functions = () => {
  const [data, setData] = useState<FunctionType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3333/function");
      const functions = (await response.json()) as FunctionType[];
      setData(functions);
    };

    getData();
  }, []);

  return <>{data && <ListFunctionsForm data={data} />}</>;
};

export default Functions;
