import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";

import carticon from "../../asset/image/carticon.svg";
import { buttonClass } from "../classnames";
import { Footer } from "../../component/Footer";

export const Orders = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-[30px] py-14">
        <div className="flex flex-row items-center">
          <ChevronLeft onClick={() => navigate(-1)} />
          <p className="flex justify-center w-full text-black text-lg font-semibold">
            Orders
          </p>
        </div>

        <div className="flex flex-col items-center text-center mt-20">
          <img src={carticon} alt="" />
          <h3 className="font-pop font-semibold text-[28px] mt-6">
            No orders yet
          </h3>
          <p className="font-pop font-normal text-[17px] opacity-50 mt-4">
            Hit the orange button down below to Create an order
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <button className={buttonClass}>Start ordering</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
