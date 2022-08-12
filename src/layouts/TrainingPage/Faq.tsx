import { Box, styled, Typography } from "@mui/material";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BaseStyledTitle from "../../components/BaseStyledTitle";

const StyledContainer = styled(Box)(({ theme }) => ({
  marginBottom: "80px",

  [theme.breakpoints.down(1080)]: {
    marginBottom: "50px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "50px",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  minWidth: "370px",
  marginTop: "50px",
  [theme.breakpoints.down("md")]: {
    marginTop: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
  },
}));

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "16px",
  color: "#1E2A39",
  letterSpacing: "0.03em",
  [theme.breakpoints.down("md")]: {
    letterSpacing: "0.02em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    letterSpacing: "0.01em",
  },
}));
const StyledCardAnswer = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "14px",
  color: "#424246",
  fontStyle: "italic",
  letterSpacing: "0.03em",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    letterSpacing: "0.02em",
  },
  [theme.breakpoints.down("sm")]: {},
}));
const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledContainer>
      <BaseStyledTitle title="Frequently Asked Questions" />

      <StyledAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <StyledCardTitle>
            1. Do I need IT experience to start this course?
          </StyledCardTitle>
        </AccordionSummary>
        <AccordionDetails>
          <StyledCardAnswer>
            You do not need to have an IT experience to start this course. We
            will navigate you through the process and help you to learn all the
            materials in timely manner.
          </StyledCardAnswer>
        </AccordionDetails>
      </StyledAccordion>
      <Accordion
        sx={{ minWidth: "370px" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <StyledCardTitle>
            2. Is my laptop good enough for coding?
          </StyledCardTitle>
        </AccordionSummary>
        <AccordionDetails>
          <StyledCardAnswer>
            There is specific requirements for Laptops, please contact us, we
            will send you all needed specifications.
          </StyledCardAnswer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ minWidth: "370px" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <StyledCardTitle>3. Will I work on projects?</StyledCardTitle>
        </AccordionSummary>
        <AccordionDetails>
          <StyledCardAnswer>
            At Techcenture, we create an opportunity for each student to have
            hands-on experience working on real projects where they would earn
            valuable experience.
          </StyledCardAnswer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ minWidth: "370px" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <StyledCardTitle>
            4. Where would I get training materials?
          </StyledCardTitle>
        </AccordionSummary>
        <AccordionDetails>
          <StyledCardAnswer>
            We will provide all the necessary materials as needed and at the
            right time. Students will have an access to online education portal
            where we will share all materials and recorded classes.
          </StyledCardAnswer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ minWidth: "370px" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <StyledCardTitle>
            5. Would Techcenture provide career support?
          </StyledCardTitle>
        </AccordionSummary>
        <AccordionDetails>
          <StyledCardAnswer>
            Yes, we will provide support and assistance to get our students
            employed. Also our Consulting and Recruiting partner firms will help
            with the process.
          </StyledCardAnswer>
        </AccordionDetails>
      </Accordion>
    </StyledContainer>
  );
};

export default Faq;
