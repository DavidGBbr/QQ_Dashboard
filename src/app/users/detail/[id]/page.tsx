"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import RedirectBtn from "@/components/RedirectBtn";
import { UserType } from "@/types/User";
import DetailUserForm from "@/components/forms/users/DetailUserForm";

type PageParams = {
  params: {
    id: number | string;
  };
};

const DetailUserPage = ({ params }: PageParams) => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`http://localhost:3333/users/${params.id}`, {
        next: { revalidate: 0 },
      });
      const data = (await response.json()) as UserType;
      setUser(data);
    };

    getUser();
  }, [params.id]);

  return (
    <main className="container">
      <div className="page-header">
        <RedirectBtn path="/users">{"< Voltar"}</RedirectBtn>
        <h2>Detalhes do usuário</h2>
      </div>
      {user && <DetailUserForm data={user} />}
    </main>
  );
};

export default DetailUserPage;
