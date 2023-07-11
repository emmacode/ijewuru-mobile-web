import { useState } from "react";
import homemenu from "../asset/image/homemenu.svg";
import shoppingcart from "../asset/image/shoppingcart.svg";
import Modal from "../component/SideBar";
import { MenuContent } from "../component/MenuContent";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-[#F2F2F2] pt-[65px] h-screen">
        <div className="flex justify-between mx-[50px]">
          <img src={homemenu} onClick={handleOpen} alt="" />
          <img src={shoppingcart} alt="" />
        </div>

        <h1 className="ml-[50px] mt-11 font-pop text-black font-bold text-[34px]">
          Delicious
          <br />
          food for you
        </h1>
      </div>
      <Modal bg="#fa4a0c" isOpen={isOpen}>
        <MenuContent handleClose={handleClose} />
      </Modal>
    </>
  );
};
