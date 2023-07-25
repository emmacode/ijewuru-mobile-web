import { createContext, useState } from "react";
import { foods, drinks, snacks, sauce, ProductProps } from "../Products";

interface CartItems {
  [key: number]: number;
}

export interface AppContextProps {
  cartItems: CartItems;
  favouriteItems: CartItems;
  getTotalCartAmount: () => number;
  addToCart: (itemId: number) => void;
  addToFavourite: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  removeFromFavourite: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  checkout: () => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

const allItems = [...foods, ...drinks, ...snacks, ...sauce];

const getDefaultCart = () => {
  let cart: CartItems = {};
  for (let i = 1; i < allItems.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart());
  const [favouriteItems, setFavouriteItems] = useState<CartItems>(
    getDefaultCart()
  );

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allItems.find(
          (product) => product.id === Number(item)
        ) as ProductProps;
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const addToFavourite = (itemId: number) => {
    setFavouriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    const itemQuantity = cartItems[itemId];
    if (itemQuantity && itemQuantity > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const removeFromFavourite = (itemId: number) => {
    setFavouriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const valueToShare = {
    cartItems,
    favouriteItems,
    addToCart,
    addToFavourite,
    removeFromCart,
    removeFromFavourite,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };

  return (
    <AppContext.Provider value={valueToShare}>{children}</AppContext.Provider>
  );
};
