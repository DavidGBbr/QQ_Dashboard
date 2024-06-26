"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import ListProfilesForm from "@/components/forms/profiles/ListProfilesForm";
import { ProfileType } from "@/types/Profile";

const Profiles = () => {
  const [data, setData] = useState<ProfileType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3333/profile");
      const profiles = (await response.json()) as ProfileType[];
      setData(profiles);
    };

    getData();
  }, []);

  return <>{data && <ListProfilesForm data={data} />}</>;
};

export default Profiles;
