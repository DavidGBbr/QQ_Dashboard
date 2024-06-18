"use client";
import React, { PropsWithChildren } from "react";
import "@/styles/form.css";
import { useRouter } from "next/navigation";

type ButtonProps = PropsWithChildren<{
  path: string;
}>;

const RedirectBtn = ({ children, path }: ButtonProps) => {
  const router = useRouter();
  return (
    <button className="button-green" onClick={() => router.push(path)}>
      {children}
    </button>
  );
};

export default RedirectBtn;
