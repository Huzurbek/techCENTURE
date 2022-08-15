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
      logo: "google.png",
      title: "Google",
    },
    {
      id: 2,
      logo: "amazon.png",
      title: "Amazon",
    },
    {
      id: 3,
      logo: "blackrock.png",
      title: "Blackrock",
    },
    {
      id: 4,
      logo: "bloomberg.png",
      title: "Bloomberg",
    },
    {
      id: 5,
      logo: "consensys.png",
      title: "Consensys",
    },
    {
      id: 6,
      logo: "facebook.png",
      title: "Facebook",
    },
    {
      id: 7,
      logo: "microsoft.png",
      title: "Microsoft",
    },
    {
      id: 8,
      logo: "morgan.png",
      title: "Morgan",
    },
    {
      id: 9,
      logo: "sigma.png",
      title: "Sigma",
    },
    {
      id: 10,
      logo: "simon.png",
      title: "Simon",
    },
    {
      id: 11,
      logo: "universal.png",
      title: "Universal",
    },
    {
      id: 12,
      logo: "zillow.png",
      title: "Zillow",
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
              src={`assets/partnerCompanyLogo/${logo.logo}`}
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
