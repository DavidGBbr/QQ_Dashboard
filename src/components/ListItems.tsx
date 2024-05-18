import React from "react";
import { IconType } from "react-icons";

import { FaGear, FaTrashCan } from "react-icons/fa6";

interface User {
  id: number;
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
    <ul className="list_items">
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <ItemIcon size={30} />
            <strong>{item.name}</strong>
          </div>
          <p>{item.email}</p>
          <p>{item.profile}</p>
          <div>
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
