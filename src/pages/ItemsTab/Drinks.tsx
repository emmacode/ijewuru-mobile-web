import { styled } from "styled-components";
import { ProductProps, drinks } from "../../Products";

export const Drinks = () => {
  const firstThreeItems: ProductProps[] = drinks.slice(0, 3);
  const renderedDrinks = firstThreeItems.map((drink) => {
    return (
      <Card
        key={drink.id}
        className="flex flex-col items-center shadow-tabitem bg-white rounded-[30px] text-center px-6 pb-10"
      >
        <img src={drink.image} alt="" />
        <h1 className="font-pop font-semibold text-[22px] opacity-80 mt-5">
          {drink.name}
        </h1>
        <p className="font-pop font-bold text-pc text-[17px]">{drink.price}</p>
      </Card>
    );
  });

  return (
    <div>
      <p className="font-pop font-normal text-[15px] text-center text-pc">
        see more
      </p>
      <div className="flex flex-row overflow-x-auto mt-5 pt-[60px]">
        {renderedDrinks}
      </div>
    </div>
  );
};

const Card = styled.div`
  margin-right: 36px;

  &:last-child {
    margin-right: 0;
  }

  & img {
    width: 164px;
    height: 164px;
    border-radius: 50%;
    max-width: max-content;
    margin-top: -60px;
  }
`;
