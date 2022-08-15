import React, { useContext } from "react";
import { Alert, Box, Snackbar, styled, Typography } from "@mui/material";
import TrainingHeader from "./layouts/TrainingPage/TrainingHeader";
import CompanyPartnerList from "./layouts/TrainingPage/CompanyPartnerList";
import WhyUs from "./layouts/TrainingPage/WhyUs";
import WhatLearn from "./layouts/TrainingPage/WhatLearn";
import Integrations from "./layouts/TrainingPage/Integrations";
import Testimonial from "./layouts/TrainingPage/Testimonial";
import Faq from "./layouts/TrainingPage/Faq";
import GetInTouch from "./layouts/TrainingPage/GetInTouch";

import { SVGProps, useRef } from "react";
import NewsBar from "./components/NewsBar";
import BaseModal from "./components/BaseModal";
import EnrollForm from "./layouts/TrainingPage/EnrollForm";

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1084px",
  margin: "0 auto",
  [theme.breakpoints.down(1080)]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    minWidth: "290px",
  },
}));

const Home: React.FC = () => {
  const [enrollModal, setEnrollModal] = React.useState(false);
  const [enrolled, setEnrolled] = React.useState(false);
  const handleEnrollModal = (userEnrolled = false) => {
    console.log('modal ochildi')
    setEnrollModal(!enrollModal);
    if (userEnrolled === true) {
      
      setEnrolled(true);
    }
  };

  return (
    <Box>
      <BaseModal
        handleClose={handleEnrollModal}
        handleOpen={handleEnrollModal}
        open={enrollModal}
        title="Course Registration Form"
        introText="Please fill in the form"
      >
        <EnrollForm handleEnrollModal={handleEnrollModal} />
      </BaseModal>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={enrolled}
        autoHideDuration={6000}
        onClose={() => setEnrolled(false)}
        message="Thank you for enrolling in our course"
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Thank you for enrolling in our course
        </Alert>
      </Snackbar>

      <TrainingHeader handleEnrollModal={handleEnrollModal} />
      <InnerContainer>
        <CompanyPartnerList />
        <WhyUs />
        <WhatLearn handleEnrollModal={handleEnrollModal}/>
        <Integrations />
        <Testimonial />
        <Faq />
        <GetInTouch />
        <NewsBar />
      </InnerContainer>
    </Box>
  );
};

export default Home;
