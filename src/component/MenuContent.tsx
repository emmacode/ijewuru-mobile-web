import styled from "styled-components";
import { Link } from "react-router-dom";

import profileIcon from "../asset/image/profileIcon.svg";
import orderIcon from "../asset/image/orderIcon.svg";
import offerIcon from "../asset/image/orderIcon.svg";
import privacyIcon from "../asset/image/privacyIcon.svg";
import securityIcon from "../asset/image/securityIcon.svg";
import forwardArrow from "../asset/image/forwardarrow.svg";

interface MenuContentProps {
  isOpen: boolean;
}

export const MenuContent = ({ isOpen }: MenuContentProps) => {
  const sidebarLinks = [
    { icon: profileIcon, label: "Profile", path: "/profile" },
    { icon: orderIcon, label: "Orders", path: "/orders" },
    { icon: offerIcon, label: "Offer and Promo", path: "/offers" },
    { icon: privacyIcon, label: "Privacy Policy", path: "/" },
    { icon: securityIcon, label: "Security", path: "/" },
  ];

  const renderedLinks = sidebarLinks.map((sidebarLink) => {
    return (
      <Link
        className="flex items-center mb-6"
        key={sidebarLink.label}
        to={sidebarLink.path}
      >
        <img className="mr-3 w-6 pb-6" src={sidebarLink.icon} alt="" />
        <p className="text-white text-base font-semibold border-b border-[#f4f4f8] font-pop pb-6 w-full">
          {sidebarLink.label}
        </p>
      </Link>
    );
  });

  return (
    <>
      <Panel isOpen={isOpen}>
        <div className="flex justify-end pt-2 pr-2"></div>
        <div className="pt-5 px-9 pb-24 flex flex-col h-screen">
          <div className="mt-16">{renderedLinks}</div>

          <div className="flex items-center mt-auto">
            <p className="text-white font-pop text-base font-semibold">
              Sign-out
            </p>
            <img src={forwardArrow} className="ml-3" alt="" />
          </div>
        </div>
      </Panel>
    </>
  );
};

const Panel = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 1;
  height: 100%;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-250px")};
  background-color: #fa4a0c;
  overflow-x: hidden;
  transition: left 0.5s;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 5px;
  }
`;
