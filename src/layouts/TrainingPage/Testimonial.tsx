import { Box, styled, Typography } from "@mui/material";
import TestimonialCard from "../../components/TestimonialCard";
import Carusel from "./Carusel";
import BaseStyledTitle from "../../components/BaseStyledTitle";

const StyledMainWrapper = styled(Box)(({ theme }) => ({
  // background: 'pink',
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const StyledCaruselWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",

  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {
    marginTop: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "290px",
    marginTop: "20px",
  },
}));
const Testimonial = () => {
  return (
    <StyledMainWrapper>
      <BaseStyledTitle title="And Over 125,000 Satisfied Engineers?" />
      <StyledCaruselWrapper>
        <Carusel />
      </StyledCaruselWrapper>
    </StyledMainWrapper>
  );
};

export default Testimonial;
