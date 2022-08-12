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

const SuperPowers = () => {
  const {
    typedSuperpower,
    selectedSuperpower,
    phase,
    resume,
  } = useTypedSuperpower(superpowers);

  return (
    <Box onClick={resume} sx={{ minHeight: "180px", minWidth: "530px" }}>
      <StyledTitle> A Course That Can</StyledTitle>
      <StyledTitle
        // #5B72EE
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
