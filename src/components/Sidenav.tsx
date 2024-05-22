"use client";
import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";
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
import "../styles/sidenav.css";

const Sidenav = ({ children }: PropsWithChildren) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              <Link href="/users">
                <FaUser size={30} />
                <span>Usuários</span>
              </Link>
            </li>
            <li>
              <Link href="/profiles">
                <FaUserCog size={30} />
                <span>Perfis</span>
              </Link>
            </li>
            <li>
              <Link href="/modules">
                <MdOutlineViewModule size={30} />
                <span>Módulos</span>
              </Link>
            </li>
            <li>
              <Link href="/transactions">
                <MdOutlineWindow size={30} />
                <span>Transações</span>
              </Link>
            </li>
            <li>
              <Link href="/functions">
                <MdReceiptLong size={30} />
                <span>Funções</span>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <CiLogout size={30} />
                <span>Sair</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </>
  );
};

export default Sidenav;
