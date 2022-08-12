import "./index.sass";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        background: "#000000",
      }}
    >
      <div className="container">
        <div className="content">
          <div style={{ textAlign: "center" }}>TechCentury</div>
          <div className="nav"></div>
          <div>© 2021 Tech Century Technologies Inc.</div>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
