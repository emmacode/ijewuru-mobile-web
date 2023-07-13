//import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import { Radio } from "../component/Form";

import avatar from "../../asset/image/avatar.svg";
import chevronleft from "../../asset/image/chevronleft.svg";
import edit from "../../asset/image/editIcon.svg";
import { buttonClass } from "../classnames";
// import cardIcon from "../asset/image/cardIcon.svg";
// import bankIcon from "../asset/image/bankIcon.svg";
// import paypalIcon from "../asset/image/paypalIcon.svg";

export const Profile = () => {
  // const [paymentMethond, setPaymentMethod] = useState("Card");

  // const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPaymentMethod(e.target.value);
  // };
  const navigate = useNavigate();

  const user = {
    firstName: "Moyin",
    lastName: "Afolabi",
    email: "afolabimoyinoluwa4@gmail.com",
    address:
      "Glory mission, Cele Ellite Road, Idi Iroko, Phase 2, Ile-Ife, Osun state.",
  };

  return (
    <>
      <div className="px-[30px] py-14 bg-[#f5f5f8] h-screen">
        <div className="flex flex-row items-center">
          <img src={chevronleft} onClick={() => navigate(-1)} alt="" />
          <p className="flex justify-center w-full text-black text-lg font-semibold">
            My profile
          </p>
        </div>

        <div className="mt-12">
          <h1 className="text-base font-semibold text-black">Information</h1>

          <div
            className="flex items-center flex-col
           mt-3 p-5 rounded-[20px]
           shadow-profile bg-white"
          >
            <div>
              <img src={avatar} alt="" />
            </div>

            <div className="flex flex-col mt-3">
              <div className="flex justify-center items-center">
                <h1 className="text-lg font-semibold font-pop text-black">
                  {user.firstName} {user.lastName}
                </h1>
                <img src={edit} alt="" className="ml-4" />
              </div>
              <p
                className="pt-2.5
              text-center text-black text-xs 
              font-normal font-pop opacity-50"
              >
                {user.email}
              </p>
              <p
                className="pt-2.5
              text-center text-black text-xs 
              font-normal font-pop opacity-50"
              >
                {user.address}
              </p>
            </div>
          </div>
        </div>

        {/* payment method */}

        {/* <div className="mt-12">
          <h1 className="text-base font-pop font-semibold text-black">
            Payment method
          </h1>

          <div className="shadow-profile bg-white rounded-[20px] p-5 mt-5">
            <Radio
              radioLabel="ml-5 pb-4 border-b border-[rgba(0, 0, 0, 1)] w-full"
              image={cardIcon}
              labelClass="text-black text-base font-normal font-pop ml-3"
              label="Card"
              name="payment"
              value="Card"
              className="mb-2.5"
              onChange={onOptionChange}
              checked={paymentMethond === "Card"}
            />

            <Radio
              divClass="mt-4"
              radioLabel="
              ml-5 pb-4 
              border-b border-[rgba(0, 0, 0, 1)] 
              w-full"
              image={bankIcon}
              labelClass="text-black text-base font-normal font-pop ml-3"
              label="Bank account"
              name="payment"
              value="Bank"
              className="mb-2.5"
              onChange={onOptionChange}
              checked={paymentMethond === "Bank"}
            />

            <Radio
              divClass="mt-4"
              radioLabel="ml-5 w-full"
              image={paypalIcon}
              labelClass="text-black text-base font-normal font-pop ml-3"
              label="Paypal"
              name="payment"
              value="Paypal"
              onChange={onOptionChange}
              checked={paymentMethond === "Paypal"}
            />
          </div>
        </div> */}
        {/* Payment box end */}

        <div className="flex justify-center mt-10">
          <button className={buttonClass}>Update</button>
        </div>
      </div>
    </>
  );
};
