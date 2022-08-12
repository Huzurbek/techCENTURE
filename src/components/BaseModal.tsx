import React from "react";
import {
  Backdrop,
  Box,
  Fade,
  Modal,
  Typography,
  styled,
  IconButton,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const StyledModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "100%",
  minHeight: 500,
  // bgcolor: 'white',

  borderRadius: "16px",
  padding: "20px",
  background: "white",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "24px",
  color: "#424246",
  textAlign: "center",
  letterSpacing: "0.03em",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    letterSpacing: "0.02em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    letterSpacing: "0.01em",
    marginBottom: "5px",
  },
}));
const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  margin: "0 0 20px",
  textAlign: "center",
  lineHeight: "120%",
  color: "#696984",
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "100%",
  },
}));

interface IModalProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  title: string;
  introText: string;
}
const BaseModal: React.FC<IModalProps> = ({
  children,
  open,
  handleClose,
  handleOpen,
  title,
  introText,
}) => {
  // const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{ zIndex: 410 }}
    >
      <Fade in={open}>
        <StyledModalContainer>
          <IconButton
            onClick={handleClose}
            color="secondary"
            size="large"
            aria-label="add close"
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <CloseOutlinedIcon fontSize="inherit" color="error" />
          </IconButton>
          <StyledTitle>{title}</StyledTitle>
          <StyledText>{introText}</StyledText>
          {children}
        </StyledModalContainer>
      </Fade>
    </Modal>
  );
};

export default BaseModal;
