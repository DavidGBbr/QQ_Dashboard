"use client";
import React from "react";
import { FaTrashCan } from "react-icons/fa6";

type Props = {
  onDelete: () => void;
};

const DeleteBtn: React.FC<Props> = ({ onDelete }) => {
  return (
    <button onClick={onDelete}>
      <FaTrashCan size={30} />
    </button>
  );
};

export default DeleteBtn;
