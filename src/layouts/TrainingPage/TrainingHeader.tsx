import {
  Box,
  Typography,
  Button,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { MButton } from "../../components/Button";
import SuperPowers from "../../components/TypingAnimation/TypingAnimation";

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1080px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  position: "relative",
  margin: "0 auto",
  width: "100%",

  // outline: '1px solid red'
}));
interface IModalProps {
  handleEnrollModal: () => void;
}
const TrainingHeader: React.FC<IModalProps> = ({ handleEnrollModal }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1000));
  return (
    <Box id="home">
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
          position: "relative",
          width: isMobile ? "200%" : "100%",
          height: "90vh",
          marginLeft: isMobile ? "-50%" : "0",
          background: "#FAE8EC",
          clipPath: "url('#maska')",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Wrapper
          style={{
            maxHeight: window.innerHeight,
            height: isMobile ? window.innerHeight * 0.7 : "auto",
            maxWidth: isMobile ? `${window.innerWidth}px` : "1080px",
            justifyContent: isMobile ? "center" : "space-between",
          }}
        >
          <Box
            sx={{
              maxWidth: isMobile ? "100%" : "600px",
              width: "100%",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <SuperPowers isMobile={isMobile} />
            <Typography
              sx={{
                maxWidth: isMobile ? "100%" : "420px",
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

          {!isMobile && (
            <img
              src="/assets/studentBg.png"
              height={window.innerHeight * 0.7}
              style={{
                right: "90px",
                marginBottom: "-22px",
              }}
            />
          )}
        </Wrapper>
      </Box>
    </Box>
  );
};

export default TrainingHeader;
