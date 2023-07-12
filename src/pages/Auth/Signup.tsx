import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Form } from "../../component/Form";
import { inputClass, labelClass, buttonClass } from "./class";

import authlogo from "../../asset/image/authlogo.svg";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirm_password") {
      setConfirmPassword(value);
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
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? ""
                : "text-black text-lg font-semibold"
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
                ? "authLink_active text-black text-lg font-semibold"
                : ""
            }
          >
            Signup
          </NavLink>
        </div>
      </div>

      <div className="py-[62px] px-[50px] h-full">
        <form>
          <div>
            <Form
              name="firstName"
              divClass="flex flex-col"
              label="First Name"
              labelClass={labelClass}
              type="text"
              onChange={handleChange}
              value={firstName}
              placeholder="Moyin"
              className={inputClass}
            />
          </div>

          <div className="mt-[46px]">
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

          <div className="mt-[46px]">
            <Form
              name="confirm_password"
              divClass="flex flex-col"
              label="Confirm Password"
              labelClass={labelClass}
              type="password"
              onChange={handleChange}
              value={confirmPassword}
              placeholder="* * * * * * * * "
              className={inputClass}
            />
          </div>

          <div className="mt-[136px] flex justify-center">
            <button className={buttonClass}>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};
