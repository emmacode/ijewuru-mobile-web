import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";
import { styled } from "styled-components";
import { drinks } from "../Products";

export const DrinkLog = () => {
  const navigate = useNavigate();

  const renderedDrinks = drinks.map((drink) => {
    return (
      <Card
        to={`/item/${drink.id}`}
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
    <div className="bg-[#f5f5f8] h-full py-10 px-5">
      <div className="flex flex-row items-center">
        <ChevronLeft onClick={() => navigate(-1)} />
        <p className="flex justify-center w-full text-black text-lg font-semibold">
          Drinks
        </p>
      </div>
      <Grid>{renderedDrinks}</Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 80px;
  grid-template-columns: auto auto;
  margin-top: 100px;
`;

const Card = styled(Link)`
  & img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    max-width: max-content;
    margin-top: -40px;
  }
`;
