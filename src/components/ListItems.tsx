"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import UpdateBtn from "./UpdateBtn";
import DeleteBtn from "./DeleteBtn";
import { ItemType } from "@/types/Item";

interface ListItemsProps {
  items: ItemType[];
  ItemIcon: IconType;
  onDelete: (item: ItemType) => void;
  updatePath: string;
  detailPath: string;
}

const ListItems: React.FC<ListItemsProps> = ({
  items,
  ItemIcon,
  onDelete,
  updatePath,
  detailPath,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemClick = (itemId: number) => {
    router.push(`/${detailPath}/${itemId}`);
  };

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="list-container">
      <ul className="list-items">
        {paginatedItems.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.id)}>
            <div className="icon-name-container">
              <ItemIcon size={30} />
              <div className="name-email-container">
                <strong>{item.name}</strong>
                <p>{item.email}</p>
              </div>
            </div>
            <p>{item.profile}</p>
            <div className="action-btn-container">
              <UpdateBtn path={`/${updatePath}/${item.id}`} />
              <DeleteBtn onDelete={() => onDelete(item)} />
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
