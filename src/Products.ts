import food1 from "./asset/image/products/brownrice.jpeg";
import food2 from "./asset/image/products/crayrice.jpeg";
import food3 from "./asset/image/products/indiarice.jpeg";
import food4 from "./asset/image/products/ricebean.jpeg";
import food5 from "./asset/image/products/riceelewe.jpeg";
import food6 from "./asset/image/products/ricenoodles.jpeg";

import drink1 from "./asset/image/products/henessy.jpeg";
import drink2 from "./asset/image/products/pepsi.jpeg";
import drink3 from "./asset/image/products/zerocoke.jpeg";
import drink4 from "./asset/image/products/schwepps.jpeg";
import drink5 from "./asset/image/products/fanta.jpeg";
import drink6 from "./asset/image/products/sprite.jpeg";

import snacks1 from "./asset/image/products/snickers.jpeg";
import snacks2 from "./asset/image/products/popcorn.jpeg";
import snacks3 from "./asset/image/products/kitkat.jpeg";
import snacks4 from "./asset/image/products/doughnut.jpeg";
import snacks5 from "./asset/image/products/baked.jpeg";
import snacks6 from "./asset/image/products/crave.jpeg";

export interface ProductProps {
  id: number;
  productName: string;
  price: string;
  productImage: string;
}

export const foods: ProductProps[] = [
  {
    id: 1,
    productName: "Brown Rice",
    price: "N1500.0",
    productImage: food1,
  },
  {
    id: 2,
    productName: "Crayfish Rice",
    price: "N1700.0",
    productImage: food2,
  },
  {
    id: 3,
    productName: "India Rice",
    price: "N3500.0",
    productImage: food3,
  },
  {
    id: 4,
    productName: "Beans & Rice",
    price: "N1200.0",
    productImage: food4,
  },
  {
    id: 5,
    productName: "Rice Elewe",
    price: "N2000.0",
    productImage: food5,
  },
  {
    id: 6,
    productName: "Rice & Noodles",
    price: "N1500.0",
    productImage: food6,
  },
];

export const Drinks: ProductProps[] = [
  {
    id: 1,
    productName: "Henessy",
    price: "$800.00",
    productImage: drink1,
  },
  {
    id: 2,
    productName: "Pepsi",
    price: "$5.00",
    productImage: drink2,
  },
  {
    id: 3,
    productName: "Zero Coke",
    price: "$10.00",
    productImage: drink3,
  },
  {
    id: 4,
    productName: "Schwepps",
    price: "$800.00",
    productImage: drink4,
  },
  {
    id: 5,
    productName: "Fanta",
    price: "$5.00",
    productImage: drink5,
  },
  {
    id: 6,
    productName: "Sprite",
    price: "$5.00",
    productImage: drink6,
  },
];

export const Snacks: ProductProps[] = [
  {
    id: 1,
    productName: "Snickers",
    price: "$2.50",
    productImage: snacks1,
  },
  {
    id: 2,
    productName: "Popcorn",
    price: "$1.50",
    productImage: snacks2,
  },
  {
    id: 3,
    productName: "Kitkat",
    price: "$1.00",
    productImage: snacks3,
  },
  {
    id: 4,
    productName: "Doughnut",
    price: "$2.00",
    productImage: snacks4,
  },
  {
    id: 5,
    productName: "Baked",
    price: "$3.00",
    productImage: snacks5,
  },
  {
    id: 6,
    productName: "Crave",
    price: "$2.00",
    productImage: snacks6,
  },
];
