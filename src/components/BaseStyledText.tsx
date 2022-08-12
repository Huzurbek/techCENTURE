import { styled, Typography } from "@mui/material";

const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "0.02em",
  color: "#696984",
  maxWidth: "832px",
  marginBottom: "60px",
  //
  [theme.breakpoints.down(1080)]: {
    lineHeight: "160%",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    lineHeight: "140%",
    margin: "0 10px 50px 10px ",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "120%",
    marginBottom: "30px",
  },
}));
interface IBaseText {
  text: string;
}
const BaseStyledText: React.FC<IBaseText> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default BaseStyledText;
