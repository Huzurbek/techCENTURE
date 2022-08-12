import { Box, styled, Typography } from "@mui/material";
import LogoSlider from "../../components/LogoSlider";

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  boxShadow: " 0 0 60px 0 rgb(0 0 0 / 10%)",
  margin: "80px auto",
  padding: "40px 40px",
  borderRadius: "8px",

  [theme.breakpoints.down(1080)]: {
    margin: "50px 20px",
    padding: "30px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "25px",
    borderRadius: "6px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "40px 20px",
    padding: "20px",
    minWidth: "340px",
    borderRadius: "5px",
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "34px",
  color: "#424246",
  textAlign: "center",
  letterSpacing: "0.03em",
  marginBottom: "15px",

  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    marginBottom: "10px",
    letterSpacing: "0.02em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    letterSpacing: "0.01em",
    marginBottom: "5px",
  },
}));
const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  margin: "0 0 20px",
  textAlign: "center",
  lineHeight: "180%",
  color: "#696984",
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "100%",
  },
}));
const CompanyPartnerList = () => {
  const productList = [
    "partner1.svg",
    "partner2.svg",
    "partner3.svg",
    "partner4.svg",
    "partner5.svg",
  ];
  return (
    <MainContainer>
      <StyledTitle>
        Our students are hired by top influential companies.
      </StyledTitle>
      <StyledText>
        Our students have gotten offers from awesome companies.
      </StyledText>
      <LogoSlider direction="right" />
      <LogoSlider direction="left" />
    </MainContainer>
  );
};

export default CompanyPartnerList;
