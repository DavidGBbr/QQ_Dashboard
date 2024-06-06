import React from "react";
import { IconType } from "react-icons";
import { FaGear, FaTrashCan } from "react-icons/fa6";

interface User {
  id: string | number;
  name: string;
  email?: string | null;
  profile?: string | null;
}

interface ListItemsProps {
  items: User[];
  ItemIcon: IconType;
}

const ListItems: React.FC<ListItemsProps> = ({ items, ItemIcon }) => {
  return (
    <ul className="list-items">
      {items.map((item) => (
        <li key={item.id}>
          <div className="icon-name-container">
            <ItemIcon size={30} />
            <div className="name-email-container">
              <strong>{item.name}</strong>
              <p>{item.email}</p>
            </div>
          </div>
          <p>{item.profile}</p>
          <div className="action-btn-container">
            <button>
              <FaGear size={30} />
            </button>
            <button>
              <FaTrashCan size={30} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
