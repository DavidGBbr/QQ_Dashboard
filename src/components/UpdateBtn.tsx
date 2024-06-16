"use client";
import React from "react";
import { FaGear } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type Props = {
  id: string | number;
};

const UpdateBtn = ({ id }: Props) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/users/update/${id}`)}>
      <FaGear size={30} />
    </button>
  );
};

export default UpdateBtn;
