import React from "react";
import "@/styles/form.css";
import ListProfilesForm from "@/components/forms/profiles/ListProfilesForm";
import { ProfileType } from "@/types/Profile";

const Profiles = async () => {
  const response = await fetch("http://localhost:3333/profile", {
    next: { revalidate: 0 },
  });
  const data = (await response.json()) as ProfileType[];
  return <ListProfilesForm data={data} />;
};

export default Profiles;
