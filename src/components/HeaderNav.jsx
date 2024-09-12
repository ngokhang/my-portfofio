import { Link } from "react-router-dom";
import useMobileDevice from "../hooks/isMobileDevice";
import MobileHeaderNav from "./MobileHeaderNav";
import { useState } from "react";
import { itemsHeaderNav } from "../constants";

const HeaderNav = () => {
  const [isMobileDevice] = useMobileDevice();
  const [show, setShow] = useState(false);

  const handleClickShowMenu = () => {
    setShow(!show);
  };

  return (
    <>
      {!!!isMobileDevice ? (
        <ul className="flex gap-4">
          {itemsHeaderNav.map((item) => (
            <li key={`header-nav-${item.label}`}>
              <Link to={item.key} className=" hover:text-cyan-600 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <MobileHeaderNav show={show} clickShowMenu={handleClickShowMenu} />
      )}
    </>
  );
};

export default HeaderNav;
