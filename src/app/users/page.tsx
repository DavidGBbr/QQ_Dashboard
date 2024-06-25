"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import { UserType } from "@/types/User";
import ListUsersForm from "@/components/forms/users/ListUsersForm";

const Users = () => {
  const [data, setData] = useState<UserType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3333/user");
      const users = (await response.json()) as UserType[];
      setData(users);
    };

    getData();
  }, []);

  return <>{data && <ListUsersForm data={data} />}</>;
};

export default Users;
