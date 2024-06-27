"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import UpdateProfileForm from "@/components/forms/profiles/UpdateProfileForm";

type PageParams = {
  params: {
    id: number | string;
  };
};

const UpdateProfilePage = ({ params }: PageParams) => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(
        `http://localhost:3333/profile/${params.id}`
      );
      const data = await response.json();
      setProfile(data);
    };
    getProfile();
  }, [params.id]);
  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/profiles">{"< Voltar"}</RedirectBtn>
        <h2>Editar perfil</h2>
      </div>

      {profile && <UpdateProfileForm data={profile} />}
    </main>
  );
};

export default UpdateProfilePage;
