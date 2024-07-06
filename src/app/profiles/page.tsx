"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import ListProfilesForm from "@/components/forms/profiles/ListProfilesForm";
import { ProfileType } from "@/types/Profile";
import { api } from "@/services/apiClient";

const Profiles = () => {
  const [data, setData] = useState<ProfileType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/profile");
      const profiles = (await response.data) as ProfileType[];
      setData(profiles);
    };

    getData();
  }, []);

  return <>{data && <ListProfilesForm data={data} />}</>;
};

export default Profiles;
