"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import { ModuleType } from "@/types/Module";
import ListModulesForm from "@/components/forms/modules/ListModulesForm";
import { api } from "@/services/apiClient";

const Modules = () => {
  const [data, setData] = useState<ModuleType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/module");
      const modules = (await response.data) as ModuleType[];
      setData(modules);
    };

    getData();
  }, []);

  return <>{data && <ListModulesForm data={data} />}</>;
};

export default Modules;
