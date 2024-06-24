import React from "react";
import RedirectBtn from "./RedirectBtn";

type Props = {
  title: string;
  redirectPath: string;
  inputPlaceholder: string;
  onSearch: (searchTerm: string) => void;
};

const ItemSearchBar = ({
  title,
  redirectPath,
  inputPlaceholder,
  onSearch,
}: Props) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <div className="page-header">
        <h2>{title}</h2>
        <RedirectBtn path={redirectPath}>Registrar</RedirectBtn>
      </div>
      <div className="search-input">
        <input
          type="text"
          placeholder={inputPlaceholder}
          onChange={handleSearchChange}
        />
        <button className="button-green">Filtrar</button>
      </div>
    </>
  );
};

export default ItemSearchBar;
