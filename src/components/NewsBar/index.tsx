import { Translate } from "@mui/icons-material";
import { Box, Typography, styled, Grid } from "@mui/material";
import BaseStyledTitle from "../BaseStyledTitle";
import BaseStyledText from "../BaseStyledText";
import BigNewsCard from "../BigNewsCard";
import SmallNewsCard from "../SmallNewsCard";

const StyledContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "100px",
});

const NewsBar = () => {
  const smallNewsList = [
    {
      id: "1",
      title: "How to Upgrade Your QA Team to QA Automation Engineers With Java",
      text:
        "Whatever industry you are working in, any requires you to keep your skills up to date. The most illustrative example of this point relates to software testing. QA specialists face more and more challenges during the work: the volume of tests rises while technologies dynamically change. To optimize the workflow and keep up with the changing technologies, they need to apply completely new methods, such as testing automation and go deeper into programming.",
      image: "https://miro.medium.com/max/875/1*sCc-b6cO1vN8IvHC2VXMog.jpeg",
    },
    {
      id: "2",
      title:
        "How Technology is Hijacking Your Mind — from a Magician and Google Design Ethicist",
      text:
        "I’m an expert on how technology hijacks our psychological vulnerabilities. That’s why I spent the last three years as a Design Ethicist at Google caring about how to design things in a way that defends a billion people’s minds from getting hijacked.",
      image: "https://miro.medium.com/max/875/1*jv-w56ymDBTwsiqx7YdIdQ.jpeg",
    },
    {
      id: "3",
      title: "Agile Data Science: How Is It Different?",
      text:
        "Does it make sense to merge Agile philosophies with data science? The short answer is yes, as long as the organization recognizes and accommodates the ambiguous, non-linear nature of the data science process rather than expecting data scientists to fit into the same mold they’ve adopted for “Agile software development”. The problem, in my experience, is that this rarely happens. Probably because the data science field is still new, many organizations are still trying to shoehorn data science into Agile software engineering practices that compromise the natural data science lifecycle.",
      image:
        "https://www.modernanalyst.com/Portals/0/Public%20Uploads/userfiles/54193/27-06-2022_1.png",
    },
  ];
  return (
    <StyledContainer>
      <BaseStyledTitle title="Latest news and resources" />
      <BaseStyledText text="See the developments that have occured to Skillines in the world" />

      <Grid container spacing={3} columns={{ xs: 4, md: 6, lg: 12 }}>
        <Grid item xs={6}>
          <BigNewsCard />
        </Grid>
        <Grid item xs={6}>
          {smallNewsList.map((e) => (
            <SmallNewsCard
              key={e.id}
              title={e.title}
              text={e.text}
              image={e.image}
            />
          ))}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default NewsBar;
