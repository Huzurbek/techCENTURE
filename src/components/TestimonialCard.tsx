import { Avatar, Box, Typography, styled } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
const StyledCard = styled(Box)(({ theme }) => ({
  borderRadius: "19px",
  borderTop: "4px solid #CD356F",
  position: "relative",
  padding: "45px 15px 20px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgb(50 50 93 / 10%)",
  margin: "0 auto",
  minHeight: "347px",
  width: "325px",
  [theme.breakpoints.down(1045)]: {
    maxWidth: "450px",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    letterSpacing: "0.01em",
    marginLeft: "10px",
    marginRight: "10px",
    minWidth: "292px",
  },
  [theme.breakpoints.down(625)]: {
    margin: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    // minWidth: '350px'
    // height: '100%',
  },
}));
const StyledJobTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  color: "#02203c",
  marginBottom: "17px",
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    marginBottom: "5px",
  },
}));
const StyledScrollBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "10px",
  paddingRight: "10px",
  height: 153,
  overflow: "hidden",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: 6,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "white",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#D3E7FF",
    borderRadius: 2,
  },
});
const StyledScrollText = styled(Typography)({
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "160%",
  textAlign: "justify",
  color: "#696984",
});

interface ITestimonial {
  avatar: string;
  name: string;
  job: string;
  logo: string;
}
const TestimonialCard: React.FC<ITestimonial> = ({
  avatar,
  name,
  job,
  logo,
}) => {
  return (
    <Box sx={{ padding: "30px 12px 5px" }}>
      <StyledCard>
        <Avatar
          src={avatar}
          sx={{
            width: 70,
            height: 70,
            position: "absolute",
            top: "-33px",
            left: "50%",
            transform: "Translate(-50%)",
            zIndex: "1",
            boxShadow: " 0 3px 5px 0 rgb(0 0 0 / 40%)",
          }}
          alt={name}
        />
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "160%",
          }}
        >
          {name}
        </Typography>

        <Box
          sx={{
            minHeight: "57px",
            //
            textAlign: "center",
            boxSizing: "border-box",
            marginBottom: "20px",
          }}
        >
          <StyledJobTitle>{job}</StyledJobTitle>
          <img
            style={{
              height: "25px",
              margin: "0 auto",
            }}
            src={logo}
            alt="Work Place"
            loading="lazy"
          />
        </Box>
        <StyledScrollBox>
          <StyledScrollText>
            I purchased your SystemsExpert course in preparation for a Google L6
            Eng. Manager role. I`m pleased to say I crushed those two interviews
            and have officially accepted an offer with a team in my ideal city.
            Big thanks to the team for your content! It`s clearly working! I
            purchased your SystemsExpert course in preparation for a Google L6
            Eng. Manager role. I`m pleased to say I crushed those two interviews
            and have officially accepted an offer with a team in my ideal city.
            Big thanks to the team for your content! It`s clearly working!
          </StyledScrollText>
        </StyledScrollBox>
      </StyledCard>
    </Box>
  );
};

export default TestimonialCard;
