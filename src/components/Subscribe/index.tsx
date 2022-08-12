import { styled, TextField } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderRadius: "80px",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const Subscribe = () => {
  return (
    <div>
      <div style={{}}>Subscribe to get our channels</div>
      <CssTextField
        label="Custom CSS"
        id="custom-css-outlined-input"
        placeholder="Placeholder"
      />
      OR <div>Email</div>
    </div>
  );
};

export default Subscribe;
