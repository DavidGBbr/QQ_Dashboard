"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { ProfileType } from "@/types/Profile";
import DetailProfileForm from "@/components/forms/profiles/DetailProfileForm";

type PageParams = {
  params: {
    id: number | string;
  };
};

const DetailProfilePage = ({ params }: PageParams) => {
  const [profile, setProfile] = useState<ProfileType>();

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(
        `http://localhost:3333/profile/${params.id}`,
        {
          next: { revalidate: 0 },
        }
      );
      const data = (await response.json()) as ProfileType;
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
