import { Box, Typography, styled } from "@mui/material";
import ToolsCard from "./ToolsCard";
import BaseStyledTitle from "../../components/BaseStyledTitle";
import BaseStyledText from "../../components/BaseStyledText";
import ToolsSlider from "./ToolsSlider";

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "80px",

  overflow: "hidden",
  [theme.breakpoints.down(1080)]: {
    margin: "0 20px 50px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "40px",
  },
}));

const Integrations = () => {
  return (
    <StyledContainer>
      <Box>
        <BaseStyledTitle title="Educational tools and platform integrations" />
        <BaseStyledText
          text="
                Techcenture Academy will train you on the latest cutting edge tools and technologies that are in demand in the market
                "
        />
      </Box>
      <Box
        sx={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "0",
        }}
      >
        <ToolsSlider direction="left" />
      </Box>
    </StyledContainer>
  );
};

export default Integrations;
