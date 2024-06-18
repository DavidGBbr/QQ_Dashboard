import React from "react";
import "@/styles/form.css";
import { ModuleType } from "@/types/Module";
import ListModulesForm from "@/components/forms/modules/ListModulesForm";

const Modules = async () => {
  const response = await fetch("http://localhost:3333/module", {
    next: { revalidate: 0 },
  });
  const data = (await response.json()) as ModuleType[];

  return <ListModulesForm data={data} />;
};

export default Modules;
