import { Box, styled } from "@mui/material";
import Slider, { CustomArrowProps } from "react-slick";
import TestimonialCard from "../../components/TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
const SliderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  marginBottom: "80px",
  [theme.breakpoints.down(1045)]: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginBottom: "60px",
  },
  [theme.breakpoints.down(625)]: {
    width: "95%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
    minWidth: "345px",
  },
}));
const MyArrow: React.FC<CustomArrowProps & { dir?: "left" | "right" }> = ({
  dir,
  onClick,
  currentSlide,
  slideCount,
}) => {
  if (!currentSlide && dir === "left") return null;

  if (slideCount && currentSlide === slideCount - 1 && dir === "right")
    return null;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#fff",
        zIndex: 100,
        right: dir === "right" ? 0 : "unset",
        transform: `translate(${dir === "right" ? 50 : -50}%,-50%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 60px rgba(41, 44, 124, 0.15)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <svg
        width="18"
        height="24"
        viewBox="0 0 18 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dir === "right" ? (
          <path d="M2 2L14 12L2 22" stroke="#54AAA5" strokeWidth="4" />
        ) : (
          <path d="M16 2L4 12L16 22" stroke="#54AAA5" strokeWidth="4" />
        )}
      </svg>
    </Box>
  );
};

const Carusel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <MyArrow dir="right" />,
    prevArrow: <MyArrow dir="left" />,

    responsive: [
      {
        breakpoint: 1045,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const employerList = [
    {
      id: "1",
      avatar:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/878c4ef86ec072df830a.jpg",
      name: "Brian",
      job: "Software Engineering Manager",
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g2c66f1d398-prod/dist/images/a2b3c3709ffedce2a22a.png",
    },
    {
      id: "2",
      avatar:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/9a7e3e6c213944b33358.jpg",
      name: "Matt",
      job: "Sr. Manager, Software Development",
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g2c66f1d398-prod/dist/images/6591cdc0702b32310306.png",
    },
    {
      id: "3",
      avatar:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/de86d258f298bd5fa62b.jpg",
      name: "Oren",
      job: "Software Engineering Manager",
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g2c66f1d398-prod/dist/images/b2bd91d7b87b2181ca45.png",
    },
    {
      id: "4",
      avatar:
        "https://assets.algoexpert.io/spas/main/prod/g5f9f36b9fd-prod/dist/images/3e1505995d406c8d1930.jpg",
      name: "Joshua",
      job: "Senior Software Engineer",
      logo:
        "https://assets.algoexpert.io/spas/main/prod/g2c66f1d398-prod/dist/images/535955e7fb592d888cc5.png",
    },
  ];
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {employerList.map((item) => (
          <TestimonialCard
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            job={item.job}
            logo={item.logo}
          />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default Carusel;
