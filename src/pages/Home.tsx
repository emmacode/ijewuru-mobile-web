import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";

import { MenuContent } from "../component/MenuContent";
import { Search } from "./Search/Search";
import { ItemsTab } from "./ItemsTab";
import { Footer } from "../component/Footer";
import { styled } from "styled-components";
export interface TabProps {
  id: string;
  title: string;
}

interface NavProps {
  clicked: boolean;
}

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const tabs: TabProps[] = [
    { id: "tab1", title: "Foods" },
    { id: "tab2", title: "Drinks" },
    { id: "tab3", title: "Snacks" },
    { id: "tab4", title: "Sauce" },
  ];

  return (
    <>
      <div className="bg-[#f2f2f2] pt-[20px] pb-2 flex flex-col h-full">
        <div className="flex justify-between mx-[30px]">
          <div className="mt-2">
            <MenuLabel>
              <Icon onClick={handleOpen} clicked={isOpen}>
                &nbsp;
              </Icon>
            </MenuLabel>

            <MenuContent isOpen={isOpen} />
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
      <Footer />
    </>
  );
};

const MenuLabel = styled.label`
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: #f2f2f2;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1000;
  margin-top: -19px;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
`;

const Icon = styled.span<NavProps>`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#adadaf")};
  width: 24px;
  height: 1px;
  display: inline-block;
  margin-top: 24px;
  margin-left: 13px;
  transition: all 0.2s;

  &::before,
  &::after {
    content: "";
    background-color: #adadaf;
    width: 24px;
    height: 1px;
    display: inline-block;

    position: absolute;
    right: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-5px")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "5px")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
