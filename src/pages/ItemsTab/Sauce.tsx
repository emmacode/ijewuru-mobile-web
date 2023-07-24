import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ProductProps, sauce } from "../../Products";

export const Sauce = () => {
  const firstThreeItems: ProductProps[] = sauce.slice(0, 3);
  const renderedSauce = firstThreeItems.map((sauce) => {
    return (
      <Card
        to={`/item/${sauce.id}`}
        key={sauce.id}
        className="flex flex-col items-center shadow-tabitem bg-white rounded-[30px] text-center px-6 pb-10"
      >
        <img src={sauce.image} alt="" />
        <h1 className="font-pop font-semibold text-[22px] opacity-80 mt-5">
          {sauce.name}
        </h1>
        <p className="font-pop font-bold text-pc text-[17px]">{sauce.price}</p>
      </Card>
    );
  });

  return (
    <div className="text-center">
      <Link to="/sauce" className="font-pop font-normal text-[15px] text-pc">
        see more
      </Link>
      <div className="flex flex-row overflow-x-auto mt-5 pt-[60px]">
        {renderedSauce}
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
