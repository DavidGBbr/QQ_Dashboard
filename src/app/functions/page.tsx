import React from "react";
import "@/styles/form.css";
import ListFunctionsForm from "@/components/forms/functions/ListFunctionsForm";
import { FunctionType } from "@/types/Function";

const Functions = async () => {
  const response = await fetch("http://localhost:3333/function", {
    next: { revalidate: 0 },
  });
  const data = (await response.json()) as FunctionType[];

  return <ListFunctionsForm data={data} />;
};

export default Functions;
