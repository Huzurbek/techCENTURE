import { Translate } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
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
  handleEnrollModal: () => void;
}
const WhatLearn:React.FC<IModalProps> = ({handleEnrollModal}) => {
  const courseList = [
    {
      id: "1",
      title: "Fullstack SDET",
      image:
        "https://fsa2-assets.imgix.net/assets/Hero-Images/man-working-at-desktop-with-plants-in-the-background_gradient-added.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=960&ixlib=php-3.3.0&w=1280",
      text:
        "This course will equip you with the knowledge needed to Analyze  business processes and write system process specifications. Work with clients and Software Engineers.",
      details: [
        {
          title: "What you will learn:",
          list: [
            "Learn Java coding language",
            "Automation Testing, using Selenium portable framework",
            "Become an expert in Automation Testing",
          ],
        },
        {
          title: "Who this course is for:",
          list: [
            "Manual Testers",
            "Individual with no previous IT experience who is passionate to learn",
            "QA Testers who want to learn Java and Selenium Automation Tool",
          ],
        },
        {
          title: "Who this course is for:",
          list: [
            "Manual Testers",
            "Individual with no previous IT experience who is passionate to learn",
            "QA Testers who want to learn Java and Selenium Automation Tool",
          ],
        },
      ],
      availableCourse: true,
    },
    {
      id: "2",
      title: "Business Systems Analyst",
      image:
        "https://fsa2-assets.imgix.net/assets/Program-Card-Images/woman-leaning-in-over-monitor-card-size.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=701&ixlib=php-3.3.0&w=1280",
      text:
        "We provide 24 weeks course, to smoothly transition you into IT career with solid knowledge and skills that will make you confident in your new job.",
      details: [
        {
          title: "What you will learn:",
          list: [
            "Learn Java coding language",
            "Automation Testing, using Selenium portable framework",
            "Become an expert in Automation Testing",
          ],
        },
        {
          title: "Who this course is for:",
          list: [
            "Manual Testers",
            "Individual with no previous IT experience who is passionate to learn",
            "QA Testers who want to learn Java and Selenium Automation Tool",
          ],
        },
      ],
      availableCourse: true,
    },
    {
      id: "3",
      title: "Fullstack Developer",
      image:
        "https://fsa2-assets.imgix.net/assets/Hero-Images/woman-working-remotely-2.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=960&ixlib=php-3.3.0&w=1280",
      text:
        "We provide 24 weeks course, to smoothly transition you into IT career with solid knowledge and skills that will make you confident in your new job.",
      details: [
        {
          title: "What you will learn:",
          list: [
            "Learn Java coding language",
            "Automation Testing, using Selenium portable framework",
            "Become an expert in Automation Testing",
          ],
        },
        {
          title: "Who this course is for:",
          list: [
            "Manual Testers",
            "Individual with no previous IT experience who is passionate to learn",
            "QA Testers who want to learn Java and Selenium Automation Tool",
          ],
        },
      ],
      availableCourse: false,
    },
  ];
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
        {courseList.map((e) => (
          <CourseCard
            key={e.id}
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
