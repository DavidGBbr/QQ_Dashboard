"use client";
import { createProfile } from "@/actions/profiles/CreateProfile";
import { SubmitBtn } from "@/components/SubmitBtn";
import { ModuleType } from "@/types/Module";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateProfileForm = () => {
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [selectedModule, setSelectedModule] = useState<string>("");
  const [profileName, setProfileName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const getModules = async () => {
      const response = await fetch("http://localhost:3333/module");
      const modulesData = await response.json();
      setModules(modulesData);
    };
    getModules();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await createProfile(formData);
    router.push("/profiles");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="module">
          <span>Nome do modulo:</span>
          <select
            name="module"
            id="module"
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecione um módulo
            </option>
            {modules.map((module) => (
              <option key={module.moduleId} value={module.moduleId}>
                {module.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="profile">
          <span>Nome do perfil:</span>
          <input
            type="text"
            name="profile"
            id="profile"
            placeholder="Digite o nome do perfil..."
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            required
          />
        </label>
        <SubmitBtn>Criar perfil</SubmitBtn>
      </form>
    </div>
  );
};

export default CreateProfileForm;
