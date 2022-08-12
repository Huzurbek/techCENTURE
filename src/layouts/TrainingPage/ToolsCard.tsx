import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  // maxWidth: '416px',
  width: "100%",
  display: "flex",
  // flexWrap: 'wrap',
  justifyContent: "center",
  gap: "20px",
  "&>img": {
    width: "125px",
    height: "85px",
  },
  [theme.breakpoints.down(1080)]: {
    maxWidth: "100%",
    justifyContent: "space-evenly",
    gap: "50px",
    rowGap: "5px",
    "&>img": {
      width: "110px",
      height: "75px",
    },
    marginBottom: "20px",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "8px",
    "&>img": {
      width: "100px",
      height: "65px",
    },
  },
  [theme.breakpoints.down(700)]: {
    gap: "30px",
    rowGap: "5px",
    "&>img": {
      width: "90px",
      height: "70px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "416px",
    minWidth: "416px",
    justifyContent: "space-between",
    rowGap: "10px",
    "&>img": {
      width: 50,
      height: 50,
    },
  },
  [theme.breakpoints.down(420)]: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));
const ToolsCard = () => {
  const toolsList = [
    { id: "1", image: "java.png" },
    { id: "2", image: "selinum.png" },
    { id: "3", image: "cucumber.png" },
    { id: "4", image: "git.png" },
    { id: "5", image: "rest.png" },
    { id: "6", image: "jira.png" },
    { id: "7", image: "oracle.png" },
    { id: "8", image: "javascript.png" },
    // {id: '9', image: 'eclipse.png'},
  ];
  return (
    <StyledBox>
      {toolsList.map((e) => (
        <img
          key={e.id}
          src={`assets/tools/${e.image}`}
          alt="tools"
          loading="lazy"
        />
      ))}
    </StyledBox>
  );
};

export default ToolsCard;
