import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.sass";
import { useCallback, useEffect, useRef, useState } from "react";
import {Link} from 'react-scroll'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const detectScroll = useCallback(() => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 200) setScrolled(true);
    else setScrolled(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobile) setOpenMenu(false);
  }, [isMobile]);

  return (
    <Box
      className={`navbar`}
      sx={{
        boxShadow: scrolled ? "0px 0px 30px 0 #1e1e1e22" : "none",
      }}
    >
      <Box
        sx={{
          mx: "auto",
          maxWidth: 1440,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <h1>TechCENTURE</h1>
        </div>
        {isMobile && (
          <IconButton
            onClick={() => setOpenMenu(!openMenu)}
            component="label"
            size="large"
          >
            <MenuIcon />
          </IconButton>
        )}

        {!isMobile && (
          <>
            <Box className="menu">
              <ul>
                <li>
                <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
                  {/* <a href="#">Home</a> */}
                </li>
                <li>
                <Link to="course" spy={true} smooth={true} offset={-100} >Course</Link>
                  {/* <a href="#">Course</a> */}
                </li>
                <li>
                <Link to="contact" spy={true} smooth={true} offset={-100}>Contact</Link>
                  {/* <a href="#">Contact</a> */}
                </li>
                <li>
                <Link to="faq" spy={true} smooth={true} offset={-100}>F.A.Q</Link>
                  {/* <a href="#">F.A.Q</a> */}
                </li>
              </ul>
            </Box>
            <Box>
              <IconButton aria-label="facebook" href="https://www.facebook.com/techcenture/" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton aria-label="instagram" href="https://www.instagram.com/" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton aria-label="twitter" href="https://twitter.com/techcenture" target="_blank">
                <Twitter />
              </IconButton>
            </Box>
          </>
        )}
      </Box>
      {isMobile && (
        <div
          ref={ref}
          className={`menu foldingMenu`}
          style={{
            maxHeight: `${openMenu ? ref.current?.scrollHeight : 0}px`,
            boxShadow: openMenu ? "0px 15px 15px 0 #1e1e1e15" : "none",
          }}
        >
          <a href="#">Home</a>
          <a href="#">Course</a>
          <a href="#">Contact</a>
          <a href="#">F.A.Q</a>
          <Box my={2}>
            <IconButton aria-label="facebook">
              <Facebook />
            </IconButton>
            <IconButton aria-label="instagram">
              <Instagram />
            </IconButton>
            <IconButton aria-label="twitter">
              <Twitter />
            </IconButton>
          </Box>
        </div>
      )}
    </Box>
  );
};
