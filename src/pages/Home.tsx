import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, ShoppingCartOutlined } from "@mui/icons-material";

import { MenuContent } from "../component/MenuContent";
import { Search } from "./Search/Search";
import { ItemsTab } from "./ItemsTab";
import { Footer } from "../component/Footer";
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
  const sidepanelStyle = {
    width: isOpen ? "250px" : "0",
    transition: "width 0.5s ease",
  };

  const tabs: TabProps[] = [
    { id: "tab1", title: "Foods" },
    { id: "tab2", title: "Drinks" },
    { id: "tab3", title: "Snacks" },
    { id: "tab4", title: "Sauce" },
  ];

  return (
    <>
      <div className="bg-[#F2F2F2] pt-[20px] pb-2 flex flex-col h-full">
        <div className="flex justify-between mx-[30px]">
          <div>
            <MenuOutlined
              onClick={handleOpen}
              className="cursor-pointer"
              sx={{ color: "#adadaf" }}
            />
            {isOpen && (
              <MenuContent
                sidepanelStyle={sidepanelStyle}
                handleClose={handleClose}
              />
            )}
          </div>
          <div>
            <Link to="/cart">
              <ShoppingCartOutlined sx={{ color: "#adadaf", width: "24px" }} />
            </Link>
          </div>
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

        <div className="mt-11 mb-14 ml-[30px]">
          <ItemsTab tabs={tabs} />
        </div>
      </div>
      {/*  */}
      <Footer />
    </>
  );
};
