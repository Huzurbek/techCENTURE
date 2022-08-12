import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Snackbar,
  styled,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { Field, Form, FormikProvider, useFormik } from "formik";
import { FormInput } from "../../components/Form/form_input";

interface IModalProps {
  handleEnrollModal?: (userEnrolled: any) => void;
}
const validation = Yup.object({
  first_name: Yup.string().required("First Name is required."),
  last_name: Yup.string().required("First Name is required."),
  email: Yup.string().required("Email is required.").email("Email is invalid"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required."),
});
type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  give_me_call: boolean;
};

const StyledMainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  },
}));

const StyledApplyButton = styled(Button)(({ theme }) => ({
  borderRadius: "19px",
  minWidth: "70px",
  height: "30px",
  fontWeight: "400",
  fontSize: "14px",
  [theme.breakpoints.down("md")]: {
    height: "25px",
    fontWeight: "500",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "20px",
  },
}));

const ContactForm: React.FC<IModalProps> = ({ handleEnrollModal }) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const formik = useFormik<FormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      give_me_call: false,
    },
    validateOnChange: false,
    validationSchema: validation,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log("Natija ", values);
      setSubmitting(false);
      // resetForm()
      // setIsDisable(true);
      // fetch("/api/application", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // })
      //   .then((response) => {
      //     response.json().then((result) => {
      //       console.log(result);
      //       clearForm();
      //       handleEnrollModal(true);
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    resetForm,
    setFieldValue,
    isSubmitting,
  } = formik;
  return (
    <StyledMainContainer>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <StyledFormControl fullWidth>
            <FormInput
              label="First name"
              form={formik}
              name="first_name"
              size="small"
            />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput
              label="Last name"
              form={formik}
              name="last_name"
              size="small"
            />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput label="Email" form={formik} name="email" size="small" />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput label="Phone" form={formik} name="phone" size="small" />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput
              label="Address"
              form={formik}
              name="address1"
              size="small"
            />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput
              label="Message"
              form={formik}
              name="message"
              size="small"
              multiline
              rows={4}
            />
          </StyledFormControl>
          <StyledFormControl>
            <FormControlLabel
              control={
                <Checkbox
                  name="give_me_call"
                  checked={formik.values.give_me_call}
                  onChange={formik.handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Give a phone call"
            />
          </StyledFormControl>

          <StyledFormControl
            fullWidth
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <StyledApplyButton
              variant="contained"
              color="error"
              sx={{ width: "fit-content", alignSelf: "end" }}
              onClick={() => {
                formik.resetForm();
              }}
            >
              Clear
            </StyledApplyButton>
            <StyledApplyButton
              variant="contained"
              color="error"
              sx={{ width: "fit-content", alignSelf: "end" }}
              type="submit"
            >
              Submit
            </StyledApplyButton>
          </StyledFormControl>
        </Form>
      </FormikProvider>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your message successfully sent!
        </Alert>
      </Snackbar>
    </StyledMainContainer>
  );
};

export default ContactForm;
