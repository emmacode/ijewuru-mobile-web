import { useNavigate } from "react-router-dom";
import chevronleft from "../../asset/image/chevronleft.svg";
import { Footer } from "../../component/Footer";

export const Offer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#F5F5F8] pt-14 px-10 h-screen">
        <img src={chevronleft} alt="" onClick={() => navigate(-1)} />
        <h1 className="mt-10 text-3xl font-pop font-medium">My offers</h1>

        <div className="mt-28">
          <h1 className="font-pop text-2xl font-medium">
            ohh snap! No offers yet
          </h1>
          <p className="mt-2 font-pop text-[17px] text-center font-normal opacity-50">
            Bella doesn't have any offers yet please check again.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
