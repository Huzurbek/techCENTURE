import { DescriptionOutlined } from "@mui/icons-material";
import { Avatar, Box, styled, Typography } from "@mui/material";

const StyledCard = styled(Box)(({ theme }) => ({
  boxShadow: "0 2px 10px rgb(50 50 93 / 10%)",
  borderRadius: "16px",
  width: "290px",
  minWidth: "290px",
  height: "330px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {
    maxWidth: "600px",
    width: "100%",
    height: "230px",
    borderRadius: "10px",
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "fit-content",
    padding: "15px",
    borderRadius: "5px",
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "150%",
  textAlign: "center",
  color: "#696984",
  [theme.breakpoints.down(1080)]: {
    // marginBottom: "60px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "160%",
    marginTop: "10px",
  },
}));

interface IPrivilageCard {
  text: string;
  image: string;
}
const PrivilageCard: React.FC<IPrivilageCard> = ({ text, image }) => {
  return (
    <StyledCard>
      <img
        src={`assets/${image}`}
        alt="privilage Illustrations"
        loading="lazy"
        style={{ width: "240px", height: "200px", objectFit: "cover" }}
      />
      <StyledText>{text}</StyledText>
    </StyledCard>
  );
};

export default PrivilageCard;
