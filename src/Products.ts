import food1 from "./asset/image/products/brownrice.jpeg";
import food2 from "./asset/image/products/crayrice.jpeg";
import food3 from "./asset/image/products/indiarice.jpeg";
import food4 from "./asset/image/products/ricebean.jpeg";
import food5 from "./asset/image/products/riceelewe.jpeg";
import food6 from "./asset/image/products/ricenoodles.jpeg";

import drink1 from "./asset/image/products/hennessy.jpeg";
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
import snacks6 from "./asset/image/products/biscuit.jpeg";

import sauce1 from "./asset/image/products/efo.jpeg";
import sauce2 from "./asset/image/products/banga.jpg";
import sauce3 from "./asset/image/products/edikaikong.jpeg";
import sauce4 from "./asset/image/products/egusi.jpeg";
import sauce5 from "./asset/image/products/whitesoup.jpeg";
import sauce6 from "./asset/image/products/ofadasauce.jpeg";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const foods: ProductProps[] = [
  {
    id: 1,
    name: "Brown Rice",
    price: 15.0,
    image: food1,
  },
  {
    id: 2,
    name: "Crayfish Rice",
    price: 17.0,
    image: food2,
  },
  {
    id: 3,
    name: "India Rice",
    price: 35.0,
    image: food3,
  },
  {
    id: 4,
    name: "Beans & Rice",
    price: 12.0,
    image: food4,
  },
  {
    id: 5,
    name: "Rice Elewe",
    price: 20.0,
    image: food5,
  },
  {
    id: 6,
    name: "Rice & Noodles",
    price: 15.0,
    image: food6,
  },
];

export const drinks: ProductProps[] = [
  {
    id: 7,
    name: "Henessy",
    price: 800.0,
    image: drink1,
  },
  {
    id: 8,
    name: "Pepsi",
    price: 5.0,
    image: drink2,
  },
  {
    id: 9,
    name: "Zero Coke",
    price: 10.0,
    image: drink3,
  },
  {
    id: 10,
    name: "Schwepps",
    price: 800.0,
    image: drink4,
  },
  {
    id: 11,
    name: "Fanta",
    price: 5.0,
    image: drink5,
  },
  {
    id: 12,
    name: "Sprite",
    price: 5.0,
    image: drink6,
  },
];

export const snacks: ProductProps[] = [
  {
    id: 13,
    name: "Snickers",
    price: 2.5,
    image: snacks1,
  },
  {
    id: 14,
    name: "Popcorn",
    price: 1.5,
    image: snacks2,
  },
  {
    id: 15,
    name: "Kitkat",
    price: 1.0,
    image: snacks3,
  },
  {
    id: 16,
    name: "Doughnut",
    price: 2.0,
    image: snacks4,
  },
  {
    id: 17,
    name: "Baked",
    price: 3.0,
    image: snacks5,
  },
  {
    id: 18,
    name: "Crave",
    price: 2.0,
    image: snacks6,
  },
];

export const sauce: ProductProps[] = [
  {
    id: 19,
    name: "Efo Riro",
    price: 6.5,
    image: sauce1,
  },
  {
    id: 20,
    name: "Banga",
    price: 8.0,
    image: sauce2,
  },
  {
    id: 21,
    name: "Edikaikong",
    price: 5.0,
    image: sauce3,
  },
  {
    id: 22,
    name: "Egusi",
    price: 4.0,
    image: sauce4,
  },
  {
    id: 23,
    name: "White Soup",
    price: 9.0,
    image: sauce5,
  },
  {
    id: 24,
    name: "Ofada Sauce",
    price: 7.5,
    image: sauce6,
  },
];
