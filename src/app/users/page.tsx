import React from "react";
import "../../styles/form.css";
import { UserType } from "@/types/User";
import ListUsersForm from "@/components/forms/users/ListUsersForm";

const Users = async () => {
  const response = await fetch("http://localhost:3333/user", {
    next: { revalidate: 0 },
  });
  const data = (await response.json()) as UserType[];

  return <ListUsersForm data={data} />;
};

export default Users;
