import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function NavbarSocials() {
  return (
    <>
      <IconButton aria-label="facebook">
        <Facebook />
      </IconButton>
      <IconButton aria-label="instagram">
        <Instagram />
      </IconButton>
      <IconButton aria-label="twitter">
        <Twitter />
      </IconButton>
    </>
  );
}
