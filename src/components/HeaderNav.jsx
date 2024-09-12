import { Link } from "react-router-dom";
import MenuBurgerIconComponent from "../assets/MenuBurgerIconComponent";
import { useEffect, useState } from "react";
import isMobileDevice from "../hooks/isMobileDevice";
import MobileHeaderNav from "./MobileHeaderNav";

const items = [
  {
    label: "About me",
    key: "about-me",
  },
  {
    label: "My Project",
    key: "my-project",
  },
  {
    label: "Background",
    key: "background",
  },
  {
    label: "My Contact",
    key: "my-contact",
  },
];

const HeaderNav = () => {
  const [test] = isMobileDevice();

  return (
    <>
      {!!!test ? (
        <ul className="flex gap-4">
          {items.map((item) => (
            <li key={`header-nav-${item.label}`}>
              <Link to={item.key} className=" hover:text-cyan-600 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <MobileHeaderNav />
      )}
    </>
  );
};

export default HeaderNav;
