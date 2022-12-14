import React from "react";

import {
  Box,
  FormControl,
  TextField,
  FormControlLabel,
  FormGroup,
  FormLabel,
  styled,
  Stack,
  Radio,
  RadioGroup,
  TextFieldProps,
} from "@mui/material";
import * as Yup from "yup";
import { Field, Form, FormikProvider, useFormik } from "formik";
import { useMemo, useRef, useState } from "react";
import countries from "../../constants/countries";
import { FormInput } from "../../components/Form/form_input";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import SelectField from "./SelecField";
import { MButton } from "../../components/Button";

enum Options {
  Online = "online",
  Onsite = "onsite",
  Hybrid = "hybrid",
}

interface IModalProps {
  handleEnrollModal: (userEnrolled: any) => void;
}
const validation = Yup.object({
  first_name: Yup.string().required("First Name is required."),
  address1: Yup.string().required("Address is required."),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string().required("Email is required.").email("Email is invalid"),
});

type FormValues = {
  birthday: Date;
  first_name: string;
  last_name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postal: string;
  country: string;
  phone: string;
  email: string;
  message: string;
  selectedOption: Options;
  file: File | null;
};
const StyledFormControl = styled(FormControl)({
  marginBottom: "20px",
});
const StyledMainContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "6px",
  paddingRight: "10px",
  paddingBottom: "10px",
  height: 600,
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: 6,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "white",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ABABAB",
    borderRadius: 2,
  },
});

const EnrollForm: React.FC<IModalProps> = ({ handleEnrollModal }) => {
  const allCountries = useMemo(() => {
    return countries.map((country) => ({
      label: country.label,
      value: country.code,
    }));
  }, [countries]);
  const input = useRef<HTMLInputElement>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      birthday: new Date(),
      first_name: "",
      last_name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postal: "",
      country: "US",
      phone: "",
      email: "",
      message: "",
      selectedOption: Options.Online,
      file: null,
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
      <input
        style={{ display: "none" }}
        ref={input}
        id="file"
        accept=".pdf"
        name="file"
        type="file"
        onChange={(event) => {
          const file = event.target.files?.[0];
          setFieldValue("file", file);
        }}
      />
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Birthday"
              inputFormat="MM/dd/yyyy"
              onChange={(value) => setFieldValue("birthday", value, false)}
              value={values.birthday}
              renderInput={(params) => (
                <TextField
                  size="small"
                  name="birthday"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
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
            <FormInput
              label="Address"
              form={formik}
              name="address1"
              size="small"
            />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput
              label="Address 2"
              form={formik}
              name="address2"
              size="small"
            />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput label="City" form={formik} name="city" size="small" />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput
              label="State / Region"
              form={formik}
              name="state"
              size="small"
            />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput
              label="Postal / Zip Code"
              form={formik}
              name="postal"
              size="small"
            />
          </StyledFormControl>
          <SelectField
            name="country"
            label="Uzbekistan"
            data={allCountries}
            fullWidth
          />
          <StyledFormControl fullWidth>
            <FormInput label="Phone" form={formik} name="phone" size="small" />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput label="Email" form={formik} name="email" size="small" />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormInput
              label="How did you hear about us?"
              form={formik}
              name="message"
              size="small"
            />
          </StyledFormControl>
          <StyledFormControl fullWidth>
            <FormLabel id="demo-radio-buttons-group-label">
              You are interested in attending what type of classes?
              <span style={{ color: "red", marginLeft: "3px" }}>*</span>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="selectedOption"
              value={values.selectedOption}
              onChange={(event) => {
                setFieldValue("selectedOption", event.currentTarget.value);
              }}
            >
              <FormControlLabel
                value={Options.Online}
                control={<Radio />}
                label="Online"
              />
              <FormControlLabel
                value={Options.Onsite}
                control={<Radio />}
                label="Onsite"
              />
              <FormControlLabel
                value={Options.Hybrid}
                control={<Radio />}
                label="Hybrid"
              />
            </RadioGroup>
          </StyledFormControl>

          <MButton
            size="large"
            variant="contained"
            color="primary"
            sx={{ width: "fit-content", alignSelf: "end", color: "white" }}
            onClick={() => input.current?.click()}
          >
            Choose your pdf file
          </MButton>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MButton
              variant="contained"
              color="error"
              sx={{ width: "fit-content", alignSelf: "end", borderRadius: '50px' }}
              onClick={() => {
                formik.resetForm();
              }}
            >
              Clear
            </MButton>
            <MButton
              variant="contained"
              color="error"
              sx={{ width: "fit-content", alignSelf: "end", borderRadius: '50px' }}
              type="submit"
            >
              Submit
            </MButton>
          </Box>
        </Form>
      </FormikProvider>
    </StyledMainContainer>
  );
};

export default EnrollForm;
