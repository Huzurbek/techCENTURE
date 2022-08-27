import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NorthEast } from "@mui/icons-material";
import {
  styled,
  IconButtonProps,
  IconButton,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import { MButton } from "./Button";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const StyledMainCardBox = styled(Box)(({ theme }) => ({
  width: "340px",
  minWidth: "320px",
  zIndex: "100",
  minHeight: "420px",
  position: "relative",
  [theme.breakpoints.down(1080)]: {
    minWidth: "300px",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "590px",
    width: "100%",
    position: "static",
    minHeight: "0",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 340,
  width: "340px",
  minWidth: "320px",
  minHeight: "420px",
  borderRadius: "19px",
  boxShadow: " 0px 9.10294px 43.6941px rgba(40, 43, 111, 0.1)",
  zIndex: "500",
  position: "absolute",
  top: "0",
  left: "0",
  paddingBottom: "5px",
  [theme.breakpoints.down(1080)]: {
    maxWidth: 320,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "590px",
    width: "100%",
    borderRadius: "16px",
    position: "static",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "16px",
  },
}));
const StyledCardContent = styled(CardContent)(({ theme }) => ({
  minHeight: 125,
  paddingBottom: "0",

  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {
    padding: "8px 16px",
  },
  [theme.breakpoints.down("sm")]: {},
}));
const StyledCourseTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "160%",
  color: "#1E2A39",
  marginBottom: "8px",
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const StyledCourseIntro = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "140%",
  color: "#696984",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const StyledContentText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  textAlign: "justify",
  letterSpacing: "0.02em",
  color: "#696984",
}));


interface ICourseCard {
  image: string;
  courseId: string,
  courseTitle: string;
  text: string;
  details: { title: string; list: string[] }[];
  availableCourse: boolean;
  handleEnrollModal: (setEnrollModal: boolean, whichCourse: string) => void ;
 
}

const CourseCard: React.FC<ICourseCard> = ({
  image,
  courseId,
  courseTitle,
  text,
  details,
  availableCourse,
  handleEnrollModal
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleApply = () => {
    handleEnrollModal(false, courseId)
    if (expanded) {
      setExpanded(false)
    }
  }
  return (
    <StyledMainCardBox>
      <StyledCard>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="Paella dish"
        />
        <StyledCardContent>
          <StyledCourseTitle>{courseTitle}</StyledCourseTitle>
          <StyledCourseIntro
            sx={{
              display: expanded ? "block" : "-webkit-box",
            }}
          >
            {" "}
            {text}
          </StyledCourseIntro>
        </StyledCardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ paddingBottom: "5px!important" }}>
              {details.map((e, index) => (
                <Box key={index}>
                  <StyledContentText style={{ marginBottom: "2px", fontWeight: "600" }}>
                    {e.title}
                  </StyledContentText>
                  <ul style={{ 
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "justify",
                    letterSpacing: "0.02em",
                    color: "#696984",
                    listStyleType: "circle",
                    paddingLeft: "15px" }}>
                    {e.list.map((element, ind) => (
                      <li key={ind}>{element}</li>
                    ))}
                  </ul>
                </Box>
              ))}
          </CardContent>
        </Collapse>
        <Box px={2} pb={2} textAlign="right">
          <MButton
            onClick={handleExpandClick}
            variant="text"
            color="inherit"
            sx={{
              mb: 1,
              color: "#252641",
              fontWeight: "400",
            }}
          >
            {expanded ? "Less" : "Learn more"}
          </MButton>
          <MButton 
            fullWidth
            variant="contained" 
            color="error"
            disabled={!availableCourse}
            onClick={handleApply}
           >
            {availableCourse ? 'APPLY' : "COMIG SOON"}
          </MButton>
        </Box>
      </StyledCard>
    </StyledMainCardBox>
  );
};

export default CourseCard;
