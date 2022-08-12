import { Box, styled, Typography } from "@mui/material";
// import Image from "next/image";
const StyledSliderContainer = styled(Box)(({ theme }) => ({
  height: "100px",
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
interface Props {
  direction: string;
}
const ToolsSlider: React.FC<Props> = (props) => {
  const logos = [
    {
      id: 1,
      logo: "java.png",
      title: "Java",
    },
    // {
    //   id: 2,
    //   logo:"html.png",
    //   title: "Html",
    // },
    {
      id: 3,
      logo: "cucumber.png",
      title: "Cucumber",
    },
    {
      id: 4,
      logo: "git.png",
      title: "Git",
    },
    // {
    //   id: 5,
    //   logo: "css.png",
    //   title: "Css",
    // },
    // {
    //   id: 6,
    //   logo: "javascript.png",
    //   title: "Javascript",
    // },
    {
      id: 7,
      logo: "oracle.png",
      title: "Oracle",
    },
    {
      id: 8,
      logo: "test.png",
      title: "TestNG",
    },
    {
      id: 9,
      logo: "jira.png",
      title: "Jira",
    },
    {
      id: 10,
      logo: "junit.png",
      title: "jUnit",
    },
    {
      id: 11,
      logo: "sauce.png",
      title: "Sauce",
    },
    {
      id: 12,
      logo: "eclipse.png",
      title: "Eclipse",
    },
    {
      id: 13,
      logo: "amazon.png",
      title: "Amazon",
    },
    {
      id: 14,
      logo: "rest.png",
      title: "Rest",
    },
    {
      id: 15,
      logo: "se.png",
      title: "Se",
    },
  ];
  const slider = [];

  for (let index = 0; index < 2; index++) {
    slider.push(
      <Box className={`slide-track-${props.direction}`} key={index}>
        {logos.map((logo) => (
          <div
            className="tool-slide"
            key={logo.id + index * logos.length}
            style={{ width: "100px", display: "flex", alignItems: "center" }}
          >
            <img
              src={`assets/tools/${logo.logo}`}
              alt={logo.title}
              style={
                {
                  // filter: "grayscale(100%) brightness(0)",
                  // objectFit: "cover",
                  // opacity: '.2',
                }
              }
            />
          </div>
        ))}
      </Box>
    );
  }

  return (
    <StyledSliderContainer className="slider" sx={{ height: 85 }}>
      {slider.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </StyledSliderContainer>
  );
};

export default ToolsSlider;
