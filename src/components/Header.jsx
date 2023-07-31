"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="flex justify-between p-3 items-center px-20 py-6 flex-wrap md:flex-nowrap sticky top-0">
      <div className="flex hover:scale-110 duration-300 ease-in-out items-center">
        <h1 className="text-3xl text-[#ED9510]">
          <a href="">Autsada</a>
        </h1>
        <h1 className="text-3xl text-white hidden md:flex">
          <a href="">Wiriya</a>
        </h1>
      </div>
      <div className="flex md:hidden text-white text-2xl items-center">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsShowMenu(!isShowMenu)}
        />
      </div>
      <div
        className={`block md:flex md:flex-row md:space-x-5 space-y-3 md:space-y-0 mt-10 md:mt-0 text-white items-center w-full md:w-fit ${
          !isShowMenu ? "hidden" : ""
        }`}
      >
        <li className="md:hover:scale-110 duration-300 ease-in-out">
          <a href="">Home</a>
        </li>
        <li className="md:hover:scale-110 duration-300 ease-in-out">
          <a href="">Experince</a>
        </li>
        <li className="md:hover:scale-110 duration-300 ease-in-out">
          <a href="">Gallery</a>
        </li>
        <li className="md:hover:scale-110 duration-300 ease-in-out">
          <a href="">Contact</a>
        </li>
      </div>
    </div>
  );
}
