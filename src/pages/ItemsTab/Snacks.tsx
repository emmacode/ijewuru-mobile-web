import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ProductProps, snacks } from "../../Products";

export const Snacks = () => {
  const firstThreeItems: ProductProps[] = snacks.slice(0, 3);
  const renderedSnacks = firstThreeItems.map((snack) => {
    return (
      <Card
        to={`/item/${snack.id}`}
        key={snack.id}
        className="flex flex-col items-center shadow-tabitem bg-white rounded-[30px] text-center px-6 pb-10"
      >
        <img src={snack.image} alt="" />
        <h1 className="font-pop font-semibold text-[22px] opacity-80 mt-5">
          {snack.name}
        </h1>
        <p className="font-pop font-bold text-pc text-[17px]">{snack.price}</p>
      </Card>
    );
  });

  return (
    <div className="text-center">
      <Link to="/snack" className="font-pop font-normal text-[15px] text-pc">
        see more
      </Link>
      <div className="flex flex-row overflow-x-auto mt-5 pt-[60px]">
        {renderedSnacks}
      </div>
    </div>
  );
};

const Card = styled(Link)`
  margin-right: 30px;

  & img {
    width: 164px;
    height: 164px;
    border-radius: 50%;
    max-width: max-content;
    margin-top: -60px;
  }
`;
