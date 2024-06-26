"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import { ModuleType } from "@/types/Module";
import ListModulesForm from "@/components/forms/modules/ListModulesForm";

const Modules = () => {
  const [data, setData] = useState<ModuleType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3333/module");
      const modules = (await response.json()) as ModuleType[];
      setData(modules);
    };

    getData();
  }, []);

  return <>{data && <ListModulesForm data={data} />}</>;
};

export default Modules;
