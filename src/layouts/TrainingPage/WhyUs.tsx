import { Box, styled, Typography } from "@mui/material";
import PrivilageCard from "../../components/PrivilageCard";
import BaseStyledTitle from "../../components/BaseStyledTitle";
import BaseStyledText from "../../components/BaseStyledText";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "80px",

  [theme.breakpoints.down(1080)]: {
    marginBottom: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "40px",
  },
}));

const StyledCardsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
  [theme.breakpoints.down(1080)]: {
    paddingLeft: "13px",
    paddingRight: "13px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px",
    paddingRight: "20px",
    gap: "20px",
  },
}));
const WhyUs = () => {
  const privilageCardList = [
    {
      id: "1",
      text: "Team of professional instructors with years of experience.",
      image: "privilage1.jpeg",
    },
    {
      id: "2",
      text:
        "Access to latest software, tools, and tailored individual approach",
      image: "privilage2.jpeg",
    },
    {
      id: "3",
      text: "Professional Consultants and Experienced Partnering Recruiters",
      image: "privilage3.jpeg",
    },
  ];
  return (
    <MainContainer>
      <BaseStyledTitle title="Why TechCenture Academy?" />
      <BaseStyledText
        text="
                                      TechCenture Academy is one powerful online software suite that combines all
                                      the tools needed to run a successful school or office. "
      />

      <StyledCardsContainer>
        {privilageCardList.map((e) => (
          <PrivilageCard key={e.id} text={e.text} image={e.image} />
        ))}
      </StyledCardsContainer>
    </MainContainer>
  );
};

export default WhyUs;
