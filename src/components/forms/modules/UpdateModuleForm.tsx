"use client";
import { updateModule } from "@/actions/modules/UpdateModule";
import { SubmitBtn } from "@/components/SubmitBtn";
import { ModuleType } from "@/types/Module";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export type UpdateFunctionProps = {
  data: ModuleType;
};

const UpdateModuleForm = ({ data }: UpdateFunctionProps) => {
  const [moduleName, setModuleName] = useState<string>(data.name || "");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("moduleId", data.moduleId.toString());
    formData.append("name", moduleName);
    await updateModule(formData);
    router.push("/modules");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="module">
          <span>Nome do módulo:</span>
          <input
            type="text"
            name="module"
            id="module"
            placeholder="Digite o nome do módulo..."
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />
        </label>
        <SubmitBtn>Atualizar módulo</SubmitBtn>
      </form>
    </div>
  );
};

export default UpdateModuleForm;
