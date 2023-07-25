import classNames from "classnames";

const inputClass = classNames(`authInput outline-none 
text-black placeholder:text-black bg-transparent placeholder:opacity-40`);

const labelClass = classNames(
  `text-[15px] text-black font-semibold opacity-40`
);

const buttonClass = classNames(`
    py-[16px] px-[64px]
    text-[17px] text-[#F6F6F9] font-semibold
    bg-pc outline-none rounded-full
`);

const buttonClassBlack = classNames(`
    py-[16px] px-[64px]
    text-[17px] text-[#F6F6F9] font-semibold
    bg-black outline-none rounded-full
`);

const blurClass = classNames(`
    py-[16px] px-[64px] cursor-not-allowed
    text-[17px] text-[#F6F6F9] font-semibold
    bg-pc opacity-70 outline-none rounded-full
`);

export { inputClass, labelClass, buttonClass, buttonClassBlack, blurClass };
