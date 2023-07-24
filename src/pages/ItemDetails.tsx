import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import {
  ChevronLeft,
  FavoriteBorderOutlined,
  Favorite,
} from "@mui/icons-material";

import { buttonClass } from "./classnames";
import { foods, drinks, snacks, sauce, ProductProps } from "../Products";

export const ItemDetails = () => {
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const { id } = useParams<{ id: string }>();
  const itemId = parseInt(id || "", 10);

  const handleAddToFavorite = () => {
    setIsAddedToFavorite(true);
  };
  const handleRemoveFromFavorite = () => {
    setIsAddedToFavorite(false);
  };
  const navigate = useNavigate();

  const findItemById = (itemId: number): ProductProps | undefined => {
    const allItems = [...foods, ...drinks, ...snacks, ...sauce];
    return allItems.find((item) => item.id === itemId);
  };
  const item = findItemById(itemId);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <div className="px-[30px] py-14 bg-[#f5f5f8] h-full">
        <div className="flex justify-between items-center">
          <ChevronLeft onClick={() => navigate(-1)} />
          {isAddedToFavorite ? (
            <FavButton onClick={handleRemoveFromFavorite}>
              <Favorite className="text-pc" />
            </FavButton>
          ) : (
            <FavButton onClick={handleAddToFavorite}>
              <FavoriteBorderOutlined />
            </FavButton>
          )}
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <img src={item.image} alt="" />
          <h1 className="font-pop font-semibold text-2xl mt-10">{item.name}</h1>
          <p className="font-pop font-bold text-pc text-[22px] mt-5">
            {item.price}
          </p>
        </div>

        <div className="flex flex-col mt-10">
          <h1 className="font-pop font-semibold text-[17px]">Delivery info</h1>
          <p className="font-pop font-normal text-[15px] opacity-50 mt-2">
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </p>
        </div>

        <div className="flex flex-col mt-10">
          <h1 className="font-pop font-semibold text-[17px]">Return policy</h1>
          <p className="font-pop font-normal text-[15px] opacity-50 mt-2">
            All our foods are double checked before leaving our stores so by any
            case you found a broken food please contact our hotline immediately.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <button className={buttonClass}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

const FavButton = styled.button`
  outline: none;
  border: none;
`;
