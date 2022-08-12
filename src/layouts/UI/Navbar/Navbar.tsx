import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.sass";
import { useCallback, useEffect, useRef, useState } from "react";

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
                  <a href="#">Home</a>
                </li>
                <li>
                  <li>
                    <a href="#">Course</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">F.A.Q</a>
                  </li>
                </li>
              </ul>
            </Box>
            <Box>
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
