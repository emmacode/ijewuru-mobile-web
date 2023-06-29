import { NavLink } from "react-router-dom";
import authlogo from "../asset/image/authlogo.svg";
import { AuthForm } from "../component/Form";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex flex-col px-12 shadow-3xl rounded-b-3xl bg-white">
        <div className="mt-12 flex justify-center">
          <img src={authlogo} className="w-36" alt="" />
        </div>
        <div className="flex justify-between mt-14">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "authLink_active text-black text-lg font-semibold"
                : "text-black text-lg font-semibold"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "authLink_active text-black text-lg font-semibold"
                : "text-black text-lg font-semibold"
            }
          >
            Signup
          </NavLink>
        </div>
      </div>

      <div className="py-[62px] px-[50px] h-full">
        <form>
          <div>
            <AuthForm
              name="email"
              divClass="flex flex-col"
              label="Email address"
              labelClass="text-[15px] text-black font-semibold opacity-40"
              type="text"
              onChange={handleChange}
              value={email}
              placeholder="moyinoluwa@gmail.com"
              className="authInput outline-none text-black placeholder:text-black bg-transparent"
            />
          </div>

          <div className="mt-[46px]">
            <AuthForm
              name="password"
              divClass="flex flex-col"
              label="Password"
              labelClass="text-[15px] text-black font-semibold opacity-40"
              type="password"
              onChange={handleChange}
              value={password}
              placeholder="* * * * * * * * "
              className="authInput outline-none text-black placeholder:text-black bg-transparent"
            />
          </div>

          <p className="text-pc text-[17px] font-semibold mt-[34px]">
            Forgot password?
          </p>

          <div className="mt-[136px] flex justify-center">
            <button className="bg-pc text-[17px] font-semibold text-[#F6F6F9] py-[25px] px-[100px] outline-none rounded-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
