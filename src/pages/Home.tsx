import { useState } from "react";

import { Sidebar } from "../component/Sidebar";
import { MenuContent } from "../component/MenuContent";

import homemenu from "../asset/image/homemenu.svg";
import shoppingcart from "../asset/image/shoppingcart.svg";
import searchIcon from "../asset/image/searchIcon.svg";
import { Form } from "../component/Form";
import { ItemsTab } from "./ItemsTab";

export interface TabProps {
  id: string;
  title: string;
}

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const tabs: TabProps[] = [
    { id: "tab1", title: "Foods" },
    { id: "tab2", title: "Drinks" },
    { id: "tab3", title: "Snacks" },
    { id: "tab4", title: "Sauce" },
  ];

  return (
    <>
      <div className="bg-[#F2F2F2] pt-[65px] h-screen">
        <div className="flex justify-between mx-[30px]">
          <img src={homemenu} onClick={handleOpen} alt="" />
          <img src={shoppingcart} alt="" />
        </div>

        <h1
          className="ml-[30px] mt-11 
        text-black text-[34px] font-pop font-bold"
        >
          Delicious
          <br />
          food for you
        </h1>

        <div
          className="
        flex items-center 
        mt-7 mx-[30px]  px-8 py-5
        rounded-3xl bg-[#efeeee]"
        >
          <img src={searchIcon} alt="" className="mr-4" />
          <Form
            type="text"
            name="search"
            onChange={handleSearch}
            value={searchText}
            placeholder="Search"
            className="
            bg-transparent
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

        <div className="mt-11 mx-[30px]">
          <ItemsTab tabs={tabs} />
        </div>
      </div>

      <Sidebar bg="#fa4a0c" isOpen={isOpen}>
        <MenuContent handleClose={handleClose} />
      </Sidebar>
    </>
  );
};
