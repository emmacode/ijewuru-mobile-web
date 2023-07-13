import { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { NavLink } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";

import { Sidebar } from "../component/SideBar";
import { MenuContent } from "../component/MenuContent";
import { Search } from "./Search/Search";
import { ItemsTab } from "./ItemsTab";

import homemenu from "../asset/image/homemenu.svg";
import shoppingcart from "../asset/image/shoppingcart.svg";

export interface TabProps {
  id: string;
  title: string;
}

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const tabs: TabProps[] = [
    { id: "tab1", title: "Foods" },
    { id: "tab2", title: "Drinks" },
    { id: "tab3", title: "Snacks" },
    { id: "tab4", title: "Sauce" },
  ];

  return (
    <>
      <div className="bg-[#F2F2F2] pt-[65px] pb-[47px] flex flex-col h-screen">
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

        <div className="mt-7 mx-[30px]">
          <Search />
        </div>

        <div className="mt-11 mx-[30px]">
          <ItemsTab tabs={tabs} />
        </div>

        <div className="flex justify-between mt-auto mx-[30px]">
          <NavLink to="/">
            <HomeOutlinedIcon sx={{ color: "#adadaf" }} />
          </NavLink>
          <NavLink to="/favourite">
            <FavoriteBorderOutlinedIcon sx={{ color: "#adadaf" }} />
          </NavLink>
          <NavLink to="/profile">
            <Person2OutlinedIcon sx={{ color: "#adadaf" }} />
          </NavLink>
          <NavLink to="/history">
            <HistoryRoundedIcon sx={{ color: "#adadaf" }} />
          </NavLink>
        </div>
      </div>

      <Sidebar bg="#fa4a0c" isOpen={isOpen}>
        <MenuContent handleClose={handleClose} />
      </Sidebar>
    </>
  );
};
