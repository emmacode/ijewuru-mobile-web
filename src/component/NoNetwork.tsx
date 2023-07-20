import nonetwork from "../asset/image/nointerneticon.svg";
import { buttonClass } from "../pages/classnames";

export const NoNetwork = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <img src={nonetwork} alt="" />
        <h3 className="font-pop font-semibold text-[28px] mt-2">
          No internet connection
        </h3>
        <p className="font-pop font-normal opacity-50 mt-4 text-[17px]">
          Your internet connection is currently not available please check or
          try again.
        </p>
        <div className="flex justify-center mt-10">
          <button className={buttonClass}>Try again</button>
        </div>
      </div>
    </>
  );
};
