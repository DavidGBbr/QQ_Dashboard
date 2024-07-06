"use client";
import { updateProfile } from "@/actions/profiles/UpdateProfile";
import { SubmitBtn } from "@/components/SubmitBtn";
import { api } from "@/services/apiClient";
import { ModuleType } from "@/types/Module";
import { ProfileType } from "@/types/Profile";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type UpdateProfileProps = {
  data: ProfileType;
};

const UpdateProfileForm = ({ data }: UpdateProfileProps) => {
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [selectedModule, setSelectedModule] = useState<string>("");
  const [profileName, setProfileName] = useState<string>(data.name || "");
  const router = useRouter();

  useEffect(() => {
    const getModules = async () => {
      const response = await api.get("/module");
      const modulesData = await response.data;
      setModules(modulesData);
    };
    getModules();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("profileId", String(data.profileId));
    await updateProfile(formData);
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
        <SubmitBtn>Editar perfil</SubmitBtn>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
