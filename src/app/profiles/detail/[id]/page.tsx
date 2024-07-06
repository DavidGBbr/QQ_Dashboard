"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { ProfileType } from "@/types/Profile";
import DetailProfileForm from "@/components/forms/profiles/DetailProfileForm";
import { api } from "@/services/apiClient";

type PageParams = {
  params: {
    id: number | string;
  };
};

const DetailProfilePage = ({ params }: PageParams) => {
  const [profile, setProfile] = useState<ProfileType>();

  useEffect(() => {
    const getProfile = async () => {
      const response = await api.get(`/profile/${params.id}`);
      const data = (await response.data) as ProfileType;
      setProfile(data);
    };

    getProfile();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/profiles">{"< Voltar"}</RedirectBtn>
        <h2>Detalhes do perfil</h2>
      </div>
      {profile && <DetailProfileForm data={profile} />}
    </main>
  );
};

export default DetailProfilePage;
