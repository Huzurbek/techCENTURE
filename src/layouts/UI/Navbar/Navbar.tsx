import { useCallback, useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.sass";
import TopNavigation from "../../../components/TopNavigation";
import NavbarLogo from "../../../components/NavbarLogo";
import NavbarSocials from "../../../components/NavbarSocials";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerClassName, setHeaderClassName] = useState("");
  const cont = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback((headerClassName: string) => {
    if (headerClassName !== "sticky" && window.pageYOffset >= 100) {
      setHeaderClassName("sticky");
    } else if (headerClassName === "sticky" && window.pageYOffset < 100) {
      setHeaderClassName("");
    }
  }, []);

  const handleMenuClick = useCallback(() => {
    if (cont.current) {
      cont.current.classList.toggle("open");
      setIsOpen(!isOpen);
      console.log("clik");
    }
  }, [cont, setIsOpen]);

  const callback = useCallback(() => {
    handleScroll(headerClassName);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", callback);
    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [headerClassName]);

  return (
    <div className={`${headerClassName ? "sticky" : "normal"}`}>
      <div ref={cont} className="cont">
        <div className="logo">
          <NavbarLogo />
        </div>
        {isOpen && (
          <>
            <div className="nav">
              <TopNavigation />
            </div>
            <div className="profile">
              <NavbarSocials />
            </div>
          </>
        )}
        <div className="burgerMenu">
          <IconButton onClick={handleMenuClick} component="label" size="large">
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
