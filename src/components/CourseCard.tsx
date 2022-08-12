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
  fontSize: "14px",
  lineHeight: "140%",
  color: "#696984",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  [theme.breakpoints.down("sm")]: {},
}));
const StyledContentText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "14px",
  textAlign: "justify",
  letterSpacing: "0.02em",
  color: "#696984",
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {
    // fontSize: '14px',
  },
  [theme.breakpoints.down("sm")]: {},
}));
const StyledApplyButton = styled(Button)(({ theme }) => ({
  borderRadius: "19px",
  minWidth: "90px",
  height: "30px",
  fontWeight: "400",
  fontSize: "14px",
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {
    height: "20px",
    fontWeight: "500",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "20px",
  },
}));

interface ICourseCard {
  image: string;
  courseTitle: string;
  text: string;
  details: { title: string; list: string[] }[];
}

const CourseCard: React.FC<ICourseCard> = ({
  image,
  courseTitle,
  text,
  details,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
              // background: expanded ? 'pink': 'blue',
              display: expanded ? "block" : "-webkit-box",
            }}
          >
            {" "}
            {text}
          </StyledCourseIntro>
        </StyledCardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ paddingBottom: "5px!important" }}>
            <StyledContentText paragraph>
              {details.map((e, index) => (
                <Box key={index}>
                  <p style={{ marginBottom: "2px", fontWeight: "600" }}>
                    {e.title}
                  </p>
                  <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
                    {e.list.map((element, ind) => (
                      <li key={ind}>{element}</li>
                    ))}
                  </ul>
                </Box>
              ))}
            </StyledContentText>
          </CardContent>
        </Collapse>
        <StyledCardActions disableSpacing>
          <StyledApplyButton
            onClick={handleExpandClick}
            variant="text"
            sx={{
              color: "#252641",
              fontWeight: "400",
              textDecorationLine: "underline",
            }}
          >
            {expanded ? "Less" : "Learn more"}
          </StyledApplyButton>
          <StyledApplyButton variant="contained" color="error">
            Apply
          </StyledApplyButton>
        </StyledCardActions>
      </StyledCard>
    </StyledMainCardBox>
  );
};

export default CourseCard;
