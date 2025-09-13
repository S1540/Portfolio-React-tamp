import React, { useState } from "react";
import HeaderLogo from "../assets/Shubham-new-logo-002.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const headerItem = [
    "HOME",
    "ABOUT",
    "SERVICE",
    "PORTFOLIO",
    "PAGES",
    "BLOG",
    "CONTACT",
  ];

  const [isOpen, setIsOpen] = useState(false);
  function handleMenuBar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="bg-black text-white md:text-black md:bg-white shadow-md shadow-gray-200 h-17 flex md:justify-around justify-between">
        <div className="max-w-44 w-full ">
          <img
            src={HeaderLogo}
            alt="Header-logo"
            className="w-full h-full object-fit"
          />
        </div>

        <div className=" max-w-xl w-full hidden md:flex items-center gap-10 text-sm font-bold">
          {headerItem.map((page, index) => (
            <a
              key={index}
              href="#"
              className="transition-all duration-300 ease-in hover:text-blue-700"
            >
              {page}
            </a>
          ))}
        </div>
        <div onClick={handleMenuBar} className="flex md:hidden items-center">
          {isOpen ? (
            <AiOutlineClose className="text-4xl mr-5 cursor-pointer " />
          ) : (
            <FaBars className="text-4xl mr-5 cursor-pointer " />
          )}
        </div>

        <div
          className={`max-w-full w-full absolute top-17 left-0 flex flex-col gap-2 bg-black md:hidden text-sm font-medium transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {headerItem.map((page, index) => (
            <a
              key={index}
              href="#"
              className="transition-all duration-300 ease-in hover:text-blue-700 px-5 py-2"
            >
              {page}
            </a>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
