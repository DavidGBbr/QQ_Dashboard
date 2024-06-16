"use client";
import { useRouter } from "next/navigation";
import { ProfileType } from "@/types/Profile";
import React, { useEffect, useState } from "react";
import { updateUser } from "@/actions/UpdateUser";

type UpdateUserProps = {
  data:
    | {
        userId: number;
        name: string;
        email: string;
        profileId: number;
      }
    | undefined;
};

const UpdateUserForm = ({ data }: UpdateUserProps) => {
  const router = useRouter();
  const [username, setUsername] = useState(data?.name || "");
  const [email, setEmail] = useState(data?.email || "");
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState<
    number | undefined
  >(data?.profileId);

  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch("http://localhost:3333/profile");
      const profilesData = await response.json();
      setProfiles(profilesData);
    };

    getProfiles();
  }, []);

  useEffect(() => {
    if (profiles.length > 0 && data?.profileId) {
      const userProfile = profiles.find((p) => p.profileId === data.profileId);
      setSelectedProfileId(userProfile?.profileId);
    }
  }, [profiles, data]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      userId: data?.userId || 0,
      name: username,
      email: email,
      profileId: selectedProfileId || 0,
    };
    const result = await updateUser(user);
    if (result.success) {
      router.push("/users");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <span>Nome do usuário:</span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Digite o nome do usuário..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o email do usuário..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="profile">
          <span>Perfil:</span>
          <div className="radio-container">
            {profiles.map((p) => (
              <label key={p.profileId}>
                <input
                  type="radio"
                  name="profile"
                  value={p.profileId}
                  checked={selectedProfileId === p.profileId}
                  onChange={() => setSelectedProfileId(p.profileId)}
                />
                <span>{p.name}</span>
              </label>
            ))}
          </div>
        </label>
        <button type="submit" className="button-orange">
          Editar usuário
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
