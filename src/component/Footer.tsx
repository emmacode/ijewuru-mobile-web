import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  FavoriteBorderOutlined,
  Person2Outlined,
  HistoryRounded,
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <div className="fixed w-full bottom-0 left-0 p-2 bg-white border-t border-solid border-hr ">
      <div className="flex justify-between mt-auto mx-[30px]">
        <NavLink to="/">
          <HomeOutlined sx={{ color: "#adadaf" }} />
        </NavLink>
        <NavLink to="/favourite">
          <FavoriteBorderOutlined sx={{ color: "#adadaf" }} />
        </NavLink>
        <NavLink to="/profile">
          <Person2Outlined sx={{ color: "#adadaf" }} />
        </NavLink>
        <NavLink to="/history">
          <HistoryRounded sx={{ color: "#adadaf" }} />
        </NavLink>
      </div>
    </div>
  );
};
