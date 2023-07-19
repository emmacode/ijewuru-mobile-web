import { useState } from "react";

import { Form } from "../../component/Form";

import searchIcon from "../../asset/image/searchIcon.svg";

export const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex items-center px-8 py-5 rounded-3xl bg-[#efeeee]">
      <img src={searchIcon} alt="" className="mr-4" />
      <Form
        type="text"
        name="search"
        onChange={handleSearch}
        value={searchText}
        placeholder="Search"
        className="bg-transparent
        font-pop font-semibold text-base
        outline-none w-full 
        text-black opacity-50
        placeholder:font-pop
        placeholder:opacity-50 
        placeholder:text-black 
        placeholder:text-base
        placeholder:font-semibold
        "
      />
    </div>
  );
};
