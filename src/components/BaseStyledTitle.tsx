import { styled, Typography } from "@mui/material";
import React from "react";

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "34px",
  lineHeight: "100%",
  textAlign: "center",
  marginBottom: "10px",
  //
  [theme.breakpoints.down(1080)]: {
    fontSize: "34px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    marginBottom: "8px",
  },
}));

interface ITitle {
  title: string;
}
const BaseStyledTitle: React.FC<ITitle> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default BaseStyledTitle;
