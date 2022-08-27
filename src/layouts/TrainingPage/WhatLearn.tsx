import { Translate } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import courses from "../../constants/courses";
import CourseCard from "../../components/CourseCard";
import BaseStyledTitle from "../../components/BaseStyledTitle";
import BaseStyledText from "../../components/BaseStyledText";

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "80px",

  [theme.breakpoints.down(1080)]: {
    marginBottom: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "40px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
}));

const CourseContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  [theme.breakpoints.down(1080)]: {
    justifyContent: "center",
    gap: "10px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  [theme.breakpoints.down("sm")]: {},
}));
interface IModalProps {
  handleEnrollModal: (userEnrolled: boolean, whichCourse: string) => void;
}
const WhatLearn:React.FC<IModalProps> = ({handleEnrollModal}) => {
  return (
    <StyledContainer id="course">
      <BaseStyledTitle title="What is TechCenture Academy?" />
      <BaseStyledText
        text="
              TechCenture Academy is career transitioning academy that focuses on every student
              at individual level and provides training and support for everyone who is willing to
              take the challenge to become an IT specialist or start a new career in IT field. 
              We provide courses that lead our students to the high paid jobs at nation’s top companies.
              "
      />
      <CourseContainer>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "Translate(-50%, -50%)",
          }}
        >
          <img
            src="/assets/TrainingPageSvg/course-bg.svg"
            alt="background"
            loading="lazy"
          />
        </Box>
        {courses.map((e) => (
          <CourseCard
            key={e.id}
            courseId={e.id}
            image={e.image}
            courseTitle={e.title}
            text={e.text}
            details={e.details}
            availableCourse={e.availableCourse}
            handleEnrollModal={handleEnrollModal}
          />
        ))}
      </CourseContainer>
    </StyledContainer>
  );
};

export default WhatLearn;
