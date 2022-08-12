import { Box, Typography, Button, styled } from "@mui/material";
import { MButton } from "../../components/Button";
import SuperPowers from "../../components/TypingAnimation/TypingAnimation";

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1084px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  margin: "0 auto",
  width: "100%",
  // outline: '1px solid red'
}));
interface IModalProps {
  handleEnrollModal: () => void;
}
const TrainingHeader: React.FC<IModalProps> = ({ handleEnrollModal }) => {
  return (
    <Box>
      <svg viewBox="0 0 1 1" style={{ position: "absolute" }}>
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="maska">
            <path
              d="M0,0V.86A1,1,0,0,0,.5,1,1.09,1.09,0,0,0,1,.87V0Z"
              transform="translate(0 0)"
            />
          </clipPath>
        </defs>
      </svg>
      <Box
        sx={{
          // marginLeft:"-100%", for mobile
          // width: "300%", for mobile
          position: "relative",
          width: "100%",
          height: "90vh",
          background: "#FAE8EC",
          clipPath: "url('#maska')",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Wrapper>
          <Box sx={{ maxWidth: "600px" }}>
            <SuperPowers />
            <Typography
              sx={{
                maxWidth: "420px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#696984",
                marginBottom: "40px",
              }}
            >
              Become a QA Automation Engineer in just 24 weeks.
            </Typography>
            <MButton
              onClick={handleEnrollModal}
              variant="contained"
              color="error"
              sx={{
                borderRadius: "20px",
                width: "150px",
                fontWeight: "600",
                fontSize: "16px",
                // lineHeight: "36px",
              }}
            >
              Apply Now
            </MButton>
          </Box>

          <img
            src="/assets/studentBg.png"
            style={{
              height: "610px",
              right: "90px",
            }}
          />
        </Wrapper>
      </Box>
    </Box>
  );
};

export default TrainingHeader;
