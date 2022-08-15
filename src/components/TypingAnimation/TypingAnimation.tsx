import { Box, styled, Typography } from "@mui/material";
import { TypePhase, useTypedSuperpower } from "./useTypedSuperpower";

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "45px",
  lineHeight: "1.25",
  color: "#1E2A39",
  marginBottom: "10px",
}));

const superpowers = ["Change The Course Of Your Life"];

const SuperPowers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const {
    typedSuperpower,
    selectedSuperpower,
    phase,
    resume,
  } = useTypedSuperpower(superpowers);

  return (
    <Box
      onClick={resume}
      sx={{ minHeight: isMobile ? window.innerHeight * 0.4 : "240px", }}
    >
      <StyledTitle> A Course That Can</StyledTitle>
      <StyledTitle
        sx={{
          color: "#EA5972",
        }}
        // className={cn('blinking-cursor',{
        //     ['end-cursor']: phase !== TypePhase.Deleting,
        //     ['blinking']: phase === TypePhase.Pausing,
        //     })}
        aria-label={selectedSuperpower}
      >
        {typedSuperpower}
      </StyledTitle>
    </Box>
  );
};

export default SuperPowers;
