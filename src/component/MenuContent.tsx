import { IoCloseOutline } from "react-icons/io5";

import profileIcon from "../asset/image/profileIcon.svg";
import orderIcon from "../asset/image/orderIcon.svg";
import offerIcon from "../asset/image/orderIcon.svg";
import privacyIcon from "../asset/image/privacyIcon.svg";
import securityIcon from "../asset/image/securityIcon.svg";
import forwardArrow from "../asset/image/forwardarrow.svg";

interface MenuContentProps {
  handleClose: () => void;
}

export const MenuContent = ({ handleClose }: MenuContentProps) => {
  const sidebarLinks = [
    { icon: profileIcon, name: "Profile" },
    { icon: orderIcon, name: "Orders" },
    { icon: offerIcon, name: "Offer and Promo" },
    { icon: privacyIcon, name: "Privacy Policy" },
    { icon: securityIcon, name: "Security" },
  ];

  const renderedLinks = sidebarLinks.map((sidebarLink) => {
    return (
      <div className="flex items-center mb-6" key={sidebarLink.name}>
        <img className="mr-3 w-6 pb-6" src={sidebarLink.icon} alt="" />
        <p className="text-white text-base font-semibold border-b border-[#f4f4f8] font-pop pb-6 w-full">
          {sidebarLink.name}
        </p>
      </div>
    );
  });

  return (
    <div className="pt-5 px-9">
      <div className="flex justify-end">
        <IoCloseOutline onClick={handleClose} className="text-white text-4xl" />
      </div>

      <div className="mt-16">{renderedLinks}</div>

      <div className="flex items-center mt-40">
        <p className="text-white font-pop text-base font-semibold">Sign-out</p>
        <img src={forwardArrow} className="ml-3" alt="" />
      </div>
    </div>
  );
};
