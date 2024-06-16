"use client";
import React from "react";
import { FaGear } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type Props = {
  path: string;
};

const UpdateBtn = ({ path }: Props) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(path)}>
      <FaGear size={30} />
    </button>
  );
};

export default UpdateBtn;
