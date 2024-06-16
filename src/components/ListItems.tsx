import React from "react";
import { IconType } from "react-icons";
import UpdateBtn from "./UpdateBtn";
import DeleteBtn from "./DeleteBtn";
import { ItemType } from "@/types/Item";

interface ListItemsProps {
  items: ItemType[];
  ItemIcon: IconType;
  updatePath: string;
  onDelete: (item: ItemType) => void;
}

const ListItems: React.FC<ListItemsProps> = ({
  items,
  ItemIcon,
  updatePath,
  onDelete,
}) => {
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
            <UpdateBtn path="users/update" />
            <DeleteBtn onDelete={() => onDelete(item)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
