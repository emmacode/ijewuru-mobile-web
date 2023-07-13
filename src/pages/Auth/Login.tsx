import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Form } from "../../component/Form";
import { inputClass, labelClass, buttonClass } from "../classnames";

import authlogo from "../../asset/image/authlogo.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div
        className="flex flex-col px-12 
      shadow-3xl rounded-b-3xl bg-white"
      >
        <div className="mt-12 flex justify-center">
          <img src={authlogo} className="w-36" alt="" />
        </div>
        <div className="flex justify-between mt-14">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "authLink_active text-black text-lg font-semibold"
                : ""
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? ""
                : "text-black text-lg font-semibold"
            }
          >
            Signup
          </NavLink>
        </div>
      </div>

      <div className="pt-[62px] pb-3 px-[50px] h-full">
        <form autoComplete="off">
          <div>
            <Form
              name="email"
              divClass="flex flex-col"
              label="Email address"
              labelClass={labelClass}
              type="text"
              onChange={handleChange}
              value={email}
              placeholder="moyinoluwa@gmail.com"
              className={inputClass}
            />
          </div>

          <div className="mt-[46px]">
            <Form
              name="password"
              divClass="flex flex-col"
              label="Password"
              labelClass={labelClass}
              type="password"
              onChange={handleChange}
              value={password}
              placeholder="* * * * * * * * "
              className={inputClass}
            />
          </div>

          <p className="text-pc text-[17px] font-semibold mt-[34px]">
            Forgot password?
          </p>

          <div className="mt-[90px] flex justify-center">
            <button className={buttonClass}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
