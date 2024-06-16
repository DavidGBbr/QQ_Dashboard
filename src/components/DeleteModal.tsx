import React from "react";
import { IoClose } from "react-icons/io5";
import "../styles/modal.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface DeleteModalProps {
  title: string;
  btnText: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  item: {
    id: number;
    name: string;
    email?: string;
    profile?: string;
  } | null;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  title,
  btnText,
  isOpen,
  onClose,
  onDelete,
  item,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-header">
            <span>{title}</span>
            <button onClick={onClose}>
              <IoClose size={30} />
            </button>
          </div>
          <div className="modal-content">
            <ul>
              <li>
                <FaUser size={30} />
                <span>{item?.name}</span>
              </li>
              <li>
                <MdEmail size={30} />
                <span>{item?.email}</span>
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button className="button-red" onClick={onDelete}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
