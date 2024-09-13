import { useState } from "react";
import ArrowLeftIcon from "../assets/ArrowLeftIcon";
import ArrowRightIcon from "../assets/ArrowRightIcon";

const Sidebar = () => {
  const [expand, setExpand] = useState(true);

  return (
    <div
      className={`flex transition-all ${
        expand ? "w-[4%] p-1" : "w-1/5 p-4"
      } bg-[#cec7c7] h-[calc(100vh_-_50px)] shadow `}
    >
      <a
        href="#"
        onClick={() => setExpand(!expand)}
        className="inline-block h-fit ml-auto"
      >
        {expand ? <ArrowRightIcon /> : <ArrowLeftIcon />}
      </a>
    </div>
  );
};

export default Sidebar;
