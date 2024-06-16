"use client";
import { ProfileType } from "@/types/Profile";
import React, { useEffect, useState } from "react";

const UpdateUserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch("http://localhost:3333/profile");
      const data = await response.json();
      const profiles = data.map((profile: ProfileType) => ({
        profileId: profile.profileId,
        name: profile.name,
      }));
      setProfiles(profiles);
    };

    getProfiles();
  }, []);

  useEffect(() => {
    if (profiles.length > 0) {
      setProfile(profiles[0]);
    }
  }, [profiles]);

  return (
    <div className="form-wrapper">
      <form className="form-container">
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
                  checked={profile?.profileId === p.profileId}
                  onChange={() => setProfile(p)}
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
