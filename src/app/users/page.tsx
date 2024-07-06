"use client";
import React, { useEffect, useState } from "react";
import "@/styles/form.css";
import { UserType } from "@/types/User";
import ListUsersForm from "@/components/forms/users/ListUsersForm";
import { api } from "@/services/apiClient";

const Users = () => {
  const [data, setData] = useState<UserType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/user");
      const users = (await response.data) as UserType[];
      setData(users);
    };

    getData();
  }, []);

  return <>{data && <ListUsersForm data={data} />}</>;
};

export default Users;
