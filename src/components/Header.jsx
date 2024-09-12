import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="w-full h-[64px] bg-[#FAFAFA] px-2 sm:px-4 md:px-10 flex justify-center lg:justify-between items-center shadow-lg sticky">
      <a href="#" className="font-bold  sm:text-base md:text-lg">
        Khang Ngo Phu's portfolio
      </a>

      <HeaderNav />
    </header>
  );
};

export default Header;
