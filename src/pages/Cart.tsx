import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  DeleteForeverOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

import swipe from "../asset/image/swipe.svg";
import food from "../asset/image/fooddisplay.jpeg";
import { buttonClass } from "./classnames";

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

export const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();
  const maxLength = 10;
  const minSwipeDistance = -30;

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onPointerMove = (e: any) => {
    const newX = e.clientX;
    const distance = newX - downX;
    if (distance < minSwipeDistance) {
      e.currentTarget.style.transform = "translateX(-150px)";
    } else {
      e.currentTarget.style.transform = "translateX(0)";
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    downX = e.clientX;
    e.currentTarget.addEventListener("pointermove", onPointerMove);
  };

  let downX: number;

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.removeEventListener("pointermove", onPointerMove);
    e.currentTarget.style.transform = "translateX(0)";
  };

  const renderedItems = sample.map((sam) => {
    const shortenedTitle =
      sam.title.length > maxLength
        ? sam.title.substring(0, maxLength) + "..."
        : sam.title;

    return (
      <Wrapper key={sam.id}>
        <ItemWrapper
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerDown={onPointerDown}
        >
          <div className="flex mr-6 flex-[1_0_79%] flex-row p-[12px] bg-white rounded-2xl shadow-profile">
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
                  <Button onClick={decrease}>-</Button>
                  <span className="mx-2">{quantity}</span>
                  <Button onClick={increase}>+</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="p-4 bg-[#df2c2c] mr-[15px] rounded-full">
              <FavoriteBorderOutlined className="text-white" />
            </div>
            <div className="p-4 bg-[#df2c2c] rounded-full">
              <DeleteForeverOutlined className="text-white" />
            </div>
          </div>
        </ItemWrapper>
      </Wrapper>
    );
  });

  return (
    <>
      <div className="px-[30px] py-14 bg-[#f5f5f8] h-screen">
        <div className="flex flex-row items-center">
          <ChevronLeft onClick={() => navigate(-1)} />
          <p className="flex justify-center w-full text-black text-lg font-semibold">
            Cart
          </p>
        </div>

        <div className="flex items-center justify-center mt-14">
          <img src={swipe} alt="" />
          <p className="font-pop font-normal text-[10px] ml-2">
            swipe on an item to delete
          </p>
        </div>

        {renderedItems}
        <div className="flex justify-center mt-10">
          <button className={buttonClass}>Complete order</button>
        </div>
      </div>
    </>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;

const ItemWrapper = styled.div`
  display: flex;
  transition: transform 800ms;
  width: max-content;
  margin-top: 20px;
`;

const Button = styled.button`
  outline: none;
  border: none;
`;
