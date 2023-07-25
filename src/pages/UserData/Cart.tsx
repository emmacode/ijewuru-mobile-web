import { useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  DeleteForeverOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

import { useAppContext } from "../../hooks/useAppContext";
import { AppContextProps } from "../../context/appContext";
import { foods, drinks, snacks, sauce } from "../../Products";

import swipe from "../../asset/image/swipe.svg";
import { Footer } from "../../component/Footer";

export const Cart: React.FC = () => {
  const {
    cartItems,
    favouriteItems,
    addToCart,
    addToFavourite,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useAppContext() as AppContextProps;
  const totalAmount = getTotalCartAmount();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allItems = [...foods, ...drinks, ...snacks, ...sauce];

  const navigate = useNavigate();
  const maxLength = 10;
  const minSwipeDistance = -30;
  let downX: number;

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

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.removeEventListener("pointermove", onPointerMove);
    e.currentTarget.style.transform = "translateX(0)";
  };

  const handleDeleteItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  const renderedItems = allItems.map((product) => {
    if (cartItems[product.id] !== 0) {
      const shortenedTitle =
        product.name.length > maxLength
          ? product.name.substring(0, maxLength) + "..."
          : product.name;
      const isItemInFavourite = favouriteItems[product.id] > 0;

      return (
        <Wrapper key={product.id}>
          <ItemWrapper
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerDown={onPointerDown}
          >
            <div className="flex mr-10 flex-[1_0_79%] flex-row p-[9px] bg-white rounded-2xl shadow-profile">
              <img
                src={product.image}
                alt=""
                className="w-[69.21px] rounded-full shadow-profile"
              />
              <div className="flex flex-col w-full ml-3">
                <h1 className="font-pop font-semibold text-[17px]">
                  {shortenedTitle}
                </h1>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-pop font-semibold text-[15px] text-pc">
                    {product.price}
                  </p>
                  <div>
                    <Button
                      className="bg-pc text-white px-2"
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </Button>
                    <input
                      value={cartItems[product.id]}
                      className="w-[30px] bg-transparent border outline-none"
                      onChange={(e) =>
                        updateCartItemCount(Number(e.target.value), product.id)
                      }
                    />
                    <Button
                      className="bg-pc text-white px-2"
                      onClick={() => addToCart(product.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="p-4 bg-[#df2c2c] mr-[15px] rounded-full">
                {isItemInFavourite ? (
                  <button
                    className="outline-none border-none bg-transparent"
                    disabled={isItemInFavourite}
                  >
                    <FavoriteBorderOutlined className="text-white" />
                  </button>
                ) : (
                  <button
                    onClick={() => addToFavourite(product.id)}
                    className="outline-none border-none bg-transparent"
                  >
                    <FavoriteBorderOutlined className="text-white" />
                  </button>
                )}
              </div>
              <div className="p-4 bg-[#df2c2c] rounded-full">
                <button
                  onClick={() => handleDeleteItem(product.id)}
                  className="outline-none border-none bg-transparent"
                >
                  <DeleteForeverOutlined className="text-white" />
                </button>
              </div>
            </div>
          </ItemWrapper>
        </Wrapper>
      );
    }
    return null;
  });

  return (
    <>
      <div className="px-[30px] pt-14 pb-20">
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
          {totalAmount > 0 ? (
            <div className="flex flex-col items-center">
              <p className="font-pop font-semibold text-[15px] opacity-50 text-center">
                Subtotal: ${totalAmount}
              </p>
              <button
                className="bg-black text-white font-pop text-base py-2 px-4 outline-none rounded"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button className="bg-pc text-white font-pop text-base mt-3 py-2 px-4 outline-none rounded">
                Complete order
              </button>
            </div>
          ) : (
            <h1>Your Cart is empty</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;

const ItemWrapper = styled.div`
  display: flex;
  transition: transform 800ms;
  width: 377px;
  margin-top: 20px;
`;

const Button = styled.button`
  outline: none;
  border: none;
`;
