import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import {
  ChevronLeft,
  FavoriteBorderOutlined,
  Favorite,
} from "@mui/icons-material";

import { blurClass, buttonClass } from "./classnames";
import { foods, drinks, snacks, sauce, ProductProps } from "../Products";
import { useAppContext } from "../hooks/useAppContext";
import { AppContextProps } from "../context/appContext";
import { Footer } from "../component/Footer";

export const ItemDetails: React.FC = () => {
  const {
    addToCart,
    cartItems,
    addToFavourite,
    favouriteItems,
    removeFromFavourite,
  } = useAppContext() as AppContextProps;
  const { id } = useParams<{ id: string }>();
  const itemId = parseInt(id || "", 10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const findItemById = (itemId: number): ProductProps | undefined => {
    const allItems = [...foods, ...drinks, ...snacks, ...sauce];
    return allItems.find((item) => item.id === itemId);
  };
  const item = findItemById(itemId);

  if (!item) {
    return <div>Item not found</div>;
  }

  const isItemInCart = cartItems[item.id] > 0;
  const isItemInFavourite = favouriteItems[item.id] > 0;

  return (
    <>
      <div className="px-[30px] py-14">
        <div className="flex justify-between items-center">
          <ChevronLeft onClick={() => navigate(-1)} />
          {isItemInFavourite ? (
            <FavButton onClick={() => removeFromFavourite(item.id)}>
              <Favorite className="text-pc" />
            </FavButton>
          ) : (
            <FavButton onClick={() => addToFavourite(item.id)}>
              <FavoriteBorderOutlined />
            </FavButton>
          )}
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <img src={item.image} alt="" />
          <h1 className="font-pop font-semibold text-2xl mt-10">{item.name}</h1>
          <p className="font-pop font-bold text-pc text-[22px] mt-5">
            $ {item.price}
          </p>
        </div>

        <div className="flex flex-col mt-10">
          <h1 className="font-pop font-semibold text-[17px]">Delivery info</h1>
          <p className="font-pop font-normal text-[15px] opacity-50 mt-2">
            Delivery time is 10am - 9pm, Monday - Saturday
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
          <button
            onClick={() => addToCart(item.id)}
            disabled={isItemInCart}
            className={isItemInCart ? blurClass : buttonClass}
          >
            {isItemInCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

const FavButton = styled.button`
  outline: none;
  border: none;
`;
