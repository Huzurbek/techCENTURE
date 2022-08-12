import { Box, styled, Typography } from "@mui/material";
const StyledSliderContainer = styled(Box)(({ theme }) => ({
  height: "100px",
  [theme.breakpoints.down(1080)]: {
    height: "90px",
  },
  [theme.breakpoints.down("md")]: {
    height: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "60px",
  },
}));
interface Props {
  direction: string;
}
const LogoSlider: React.FC<Props> = (props) => {
  const logos = [
    {
      id: 1,
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/a2b3c3709ffedce2a22a.png",
      title: "Google",
    },
    {
      id: 2,
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/3cd767dea94a85078ca4.png",
      title: "Expert Coach",
    },
    {
      id: 3,
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/3b7d9f4b073deb6a9b74.png",
      title: "Expert Coach",
    },
    {
      id: 4,
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/6591cdc0702b32310306.png",
      title: "Expert Coach",
    },
    {
      id: 5,
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/b2bd91d7b87b2181ca45.png",
      title: "Expert Coach",
    },
    {
      id: 6,
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/7ae42bac3b34999c0db3.png",
      title: "Expert Coach",
    },
  ];
  const slider = [];

  for (let index = 0; index < 2; index++) {
    slider.push(
      <Box className={`slide-track-${props.direction}`} key={index}>
        {logos.map((logo) => (
          <div
            className="slide"
            key={logo.id + index * logos.length}
            style={{ width: "100px", display: "flex", alignItems: "center" }}
          >
            <img
              src={logo.logo}
              alt={logo.title}
              style={{
                filter: "grayscale(100%) brightness(0)",
                objectFit: "cover",
                opacity: ".2",
              }}
            />
          </div>
        ))}
      </Box>
    );
  }

  return (
    <StyledSliderContainer className="slider">
      {slider.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </StyledSliderContainer>
  );
};

export default LogoSlider;
