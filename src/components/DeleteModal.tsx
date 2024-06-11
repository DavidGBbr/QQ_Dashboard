import React from "react";
import { IoClose } from "react-icons/io5";
import "../styles/modal.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const DeleteModal = () => {
  if (false) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-header">
              <span>Deseja excluir o usuário?</span>
              <button>
                <IoClose size={30} />
              </button>
            </div>
            <div className="modal-content">
              <ul>
                <li>
                  <FaUser size={30} />
                  <span>Jorge Bastos</span>
                </li>
                <li>
                  <MdEmail size={30} />
                  <span>jorgebastos@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button className="button-red">Excluir usuário</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DeleteModal;
