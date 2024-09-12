import { useEffect, useState } from "react";

const useMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    const { innerWidth } = window;
    if (innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [isMobile];
};

export default useMobileDevice;
