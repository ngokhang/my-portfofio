const Backdrop = ({ show, clickBackdrop }) => {
  return (
    <div
      className={`
    ${
      show ? "block" : "hidden"
    } absolute top-0 left-0 w-full h-[100vh] bg-black-rgba `}
      onClick={() => clickBackdrop()}
    ></div>
  );
};

export default Backdrop;
