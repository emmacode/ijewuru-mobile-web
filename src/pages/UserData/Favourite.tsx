import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";

import food from "../../asset/image/fooddisplay.jpeg";

const sample = [
  {
    id: 1,
    image: food,
    title: "Veggie tomato mix",
    amount: "N1,900",
  },
  {
    id: 2,
    image: food,
    title: "Fish with mix orange",
    amount: "N1,900",
  },
  {
    id: 3,
    image: food,
    title: "Last sample jellof wrice :)",
    amount: "N1,900",
  },
];

export const Favourite = () => {
  const navigate = useNavigate();
  const maxLength = 10;

  const renderedItems = sample.map((sam) => {
    const shortenedTitle =
      sam.title.length > maxLength
        ? sam.title.substring(0, maxLength) + "..."
        : sam.title;

    return (
      <ItemWrapper key={sam.id}>
        <div className="flex flex-[1_0_79%] flex-row p-[12px] bg-white rounded-2xl shadow-profile">
          <img
            src={sam.image}
            alt=""
            className="w-[69.21px] rounded-full shadow-profile"
          />
          <div className="flex flex-col w-full ml-7">
            <h1 className="font-pop font-semibold text-[17px]">
              {shortenedTitle}
            </h1>
            <div className="flex justify-between items-center mt-2">
              <p className="font-pop font-semibold text-[15px] text-pc">
                {sam.amount}
              </p>
              <div className="font-pop font-semibold bg-pc text-white text-[13px] rounded-[30px] px-[9px] py-1">
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </ItemWrapper>
    );
  });

  return (
    <>
      <div className="px-[30px] py-14 bg-[#f5f5f8] h-screen">
        <div className="flex flex-row items-center">
          <ChevronLeft onClick={() => navigate(-1)} />
          <p className="flex justify-center w-full text-black text-lg font-semibold">
            Favourite
          </p>
        </div>

        <div className="mt-20">{renderedItems}</div>
      </div>
    </>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  transition: transform 800ms;
  margin-top: 20px;
`;

const Button = styled.button`
  outline: none;
  border: none;
`;
