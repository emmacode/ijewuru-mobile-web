import { useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";

import { useAppContext } from "../../hooks/useAppContext";
import { AppContextProps } from "../../context/appContext";
import { foods, drinks, snacks, sauce } from "../../Products";
import { Footer } from "../../component/Footer";

export const Favourite = () => {
  const navigate = useNavigate();
  const { cartItems, favouriteItems, addToCart } =
    useAppContext() as AppContextProps;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allItems = [...foods, ...drinks, ...snacks, ...sauce];
  const maxLength = 10;

  const renderedItems = allItems.map((product) => {
    if (favouriteItems[product.id] !== 0) {
      const shortenedTitle =
        product.name.length > maxLength
          ? product.name.substring(0, maxLength) + "..."
          : product.name;
      const isItemInCart = cartItems[product.id] > 0;

      return (
        <ItemWrapper key={product.id}>
          <div className="flex flex-[1_0_79%] flex-row p-[12px] bg-white rounded-2xl shadow-profile">
            <img
              src={product.image}
              alt=""
              className="w-[69.21px] rounded-full shadow-profile"
            />
            <div className="flex flex-col w-full ml-7">
              <h1 className="font-pop font-semibold text-[17px]">
                {shortenedTitle}
              </h1>
              <div className="flex justify-between items-center mt-2">
                <p className="font-pop font-semibold text-[15px] text-pc">
                  $ {product.price}
                </p>
                <div
                  className={
                    isItemInCart
                      ? "font-pop font-semibold bg-pc opacity-70 text-white text-[13px] rounded-[30px] px-[9px] py-1 cursor-not-allowed"
                      : "font-pop font-semibold bg-pc text-white text-[13px] rounded-[30px] px-[9px] py-1"
                  }
                >
                  <Button onClick={() => addToCart(product.id)}>
                    {isItemInCart ? "In cart" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ItemWrapper>
      );
    }
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
      <Footer />
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
