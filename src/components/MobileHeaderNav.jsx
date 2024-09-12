import React from "react";
import MenuBurgerIconComponent from "../assets/MenuBurgerIconComponent";
import { Link } from "react-router-dom";
import { itemsHeaderNav } from "../constants";
import Backdrop from "./Backdrop";
import UserIcon from "../assets/UserIcon";
import PaperPlaneIcon from "../assets/PaperPlaneIcon";
import GraduationHatIcon from "../assets/GraduationHatIcon";
import PhoneIcon from "../assets/PhoneIcon";

const items = [
  {
    label: "About me",
    key: "about-me",
    icon: <UserIcon />,
  },
  {
    label: "My Projects",
    key: "my-projects",
    icon: <PaperPlaneIcon />,
  },
  {
    label: "My Profile",
    key: "my-profile",
    icon: <GraduationHatIcon />,
  },
  {
    label: "My Contact",
    key: "my-contact",
    icon: <PhoneIcon />,
  },
];

const MobileHeaderNav = ({ show, clickShowMenu }) => {
  return (
    <>
      <Backdrop show={show} clickBackdrop={clickShowMenu} />
      <button
        className="relative ml-auto cursor-pointer"
        onClick={clickShowMenu}
      >
        <MenuBurgerIconComponent />
      </button>
      <nav
        className={`absolute top-0 transition-position ${
          show ? "left-0" : "left-[-100%]"
        } w-[80%] sm:w-[50%] md:w-[40%] h-[100vh] z-50 flex flex-col p-4 bg-[#e1f4f5] drop-shadow-xl`}
      >
        <h3 className="text-center text-2xl pt-2 pb-5 font-bold">
          Khang Ngo Phu's Portfolio
        </h3>
        <div className="flex flex-col pt-5 ps-3 gap-8">
          {items.map((item) => (
            <Link
              to={item.key}
              key={`header-mobile-nav-${item.label}`}
              className="flex gap-3 text-lg md:text-xl font-semibold transition hover:translate-x-2 hover:text-sky-600"
            >
              <p className="hover:text-sky-600">{item.icon}</p>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileHeaderNav;
