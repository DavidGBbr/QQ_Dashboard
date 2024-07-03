"use client";
import Link from "next/link";
import React, { PropsWithChildren, useContext, useState } from "react";
import Image from "next/image";
import { FaUser, FaUserCog } from "react-icons/fa";
import {
  MdOutlineViewModule,
  MdOutlineWindow,
  MdReceiptLong,
} from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import "../styles/sidenav.css";
import { AuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Sidenav = ({ children }: PropsWithChildren) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { signOut } = useContext(AuthContext);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      const success = await signOut();
      if (success) router.push("/");
    } catch (error) {
      toast.error("Erro ao sair!");
      console.log("Erro ao deslogar usuário: ", error);
    }
  };

  return (
    <>
      <div className="menu-container">
        <button className="menu-btn" onClick={toggleMobileMenu}>
          <IoMenu size={30} />
        </button>
      </div>
      <div
        className={`sidenav-container ${isMobileMenuOpen ? "mobile-open" : ""}`}
      >
        <div className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
          <button className="close-btn" onClick={toggleMobileMenu}>
            <IoIosClose size={60} />
          </button>
          <ul>
            <li>
              <Link href="/users" prefetch={true}>
                <FaUser size={30} />
                <span>Usuários</span>
              </Link>
            </li>
            <li>
              <Link href="/profiles" prefetch={true}>
                <FaUserCog size={30} />
                <span>Perfis</span>
              </Link>
            </li>
            <li>
              <Link href="/modules" prefetch={true}>
                <MdOutlineViewModule size={30} />
                <span>Módulos</span>
              </Link>
            </li>
            <li>
              <Link href="/transactions" prefetch={true}>
                <MdOutlineWindow size={30} />
                <span>Transações</span>
              </Link>
            </li>
            <li>
              <Link href="/functions" prefetch={true}>
                <MdReceiptLong size={30} />
                <span>Funções</span>
              </Link>
            </li>
            <li>
              <Link href="/reports" prefetch={true}>
                <TbReportSearch size={30} />
                <span>Relatórios</span>
              </Link>
            </li>
            <li>
              <span onClick={handleLogout} className="logout-btn">
                <CiLogout size={30} />
                <span>Sair</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </>
  );
};

export default Sidenav;
