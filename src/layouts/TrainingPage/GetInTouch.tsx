import { Box, styled, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import BaseStyledTitle from "../../components/BaseStyledTitle";
import { lazy } from "react";

const MyAwesomeMap = lazy(() => import("../../components/Map"));
const StyledMainWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "80px",
  [theme.breakpoints.down(1080)]: {
    marginBottom: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "50px",

  [theme.breakpoints.down(1080)]: {
    gap: 20,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginTop: "40px",
    gap: 15,
  },
  [theme.breakpoints.down("sm")]: {
    // paddingLeft: '15px',
    // paddingRight: '15px'
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  color: "#696984",
  textAlign: "center",
  letterSpacing: "0.02em",
  marginBottom: "5px",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    letterSpacing: "0.01em",
  },
}));
const StyledFormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 540,
  minWidth: 300,
  boxShadow: "0 2px 10px rgb(50 50 93 / 10%)",
  borderRadius: "16px",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));
const GetInTouch = () => {
  return (
    <StyledMainWrapper id="contact">
      <BaseStyledTitle title="Get In Touch" />

      <StyledContainer>
        <Box flex={1} width="100%" alignSelf="flex-start" mr={2}>
          <Box
            sx={{
              width: "100%",
              height: 350,
              boxShadow: "0 2px 10px rgb(50 50 93 / 10%)",
              borderRadius: "10px",
            }}
          >
            <MyAwesomeMap />
          </Box>
          <Box mt={2}>
            <StyledText>1660 International Dr, 602</StyledText>
            <StyledText>McLean VA 22102 ​</StyledText>
            <StyledText>admin@techcenture.net</StyledText>
            <StyledText>(703) 389-5354</StyledText>
          </Box>
        </Box>
        <StyledFormContainer>
          <StyledText sx={{ fontSize: "12px", marginBottom: "20px" }}>
            Fill out the form below and our team will give you a call to discuss
            your learning goals, financing options, career services and more!
          </StyledText>
          <ContactForm />
        </StyledFormContainer>
      </StyledContainer>
    </StyledMainWrapper>
  );
};

export default GetInTouch;
