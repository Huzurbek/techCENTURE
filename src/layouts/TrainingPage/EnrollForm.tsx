import React from "react";

import {
  Box,
  FormControl,
  TextField,
  FormControlLabel,
  Button,
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
import courses from "../../constants/courses";
import { FormInput } from "../../components/Form/form_input";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import SelectField from "./SelecField";

enum Options {
  Online = "online",
  Onsite = "onsite",
  Hybrid = "hybrid",
}

interface IModalProps {
  courseEnroll: string,
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
  course: string;
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

const EnrollForm: React.FC<IModalProps> = ({ handleEnrollModal, courseEnroll }) => {
  console.log({ EnrollForm: courseEnroll })
  const allCountries = useMemo(() => {
    return countries.map((country) => ({
      label: country.label,
      value: country.code,
    }));
  }, [countries]);

  const selectedCourse = courses.find(course => course.id == courseEnroll)
  
  const allCourses = useMemo(() => {
    return courses.filter(course => course.availableCourse).map((course) => ({
      label: course.title,
      value: course.id,
    }));
  }, [courses]);
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
      course: selectedCourse ? selectedCourse.id : allCourses[0].value,
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
      const body = new FormData();
      const selectedCouse = allCourses.find(
        (course) => course.value === values.course
      );
      const selectedCourseLabel = selectedCouse && selectedCouse != undefined ? selectedCouse.label : "";

      body.append("courseId", values.course);
      body.append("courseLabel", selectedCourseLabel);
      body.append("first_name", values.first_name);
      body.append("last_name", values.last_name);
      body.append("address1", values.address1);
      body.append("address2", values.address2);
      body.append("city", values.city);
      body.append("state", values.state);
      body.append("postal", values.postal);
      body.append("country", values.country);
      body.append("phone", values.phone);
      body.append("email", values.email);
      body.append("message", values.message);
      body.append("selectedOption", values.selectedOption);
      body.append(
        "birthday",
        values.birthday !== null ? values.birthday.toISOString() : ""
      );
      body.append("file", values.file !== null ? values.file : "");
      // console.log("origin: ", window.location.origin)
      fetch("/api/application", {
        method: "POST",
        body,
      })
        .then((response) => {
          response.json().then((result) => {
            console.log(result);
            // clearForm();
            handleEnrollModal(true);
          });
        })
        .catch((err) => {
          console.log(err);
        });
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
          <SelectField name="course" data={allCourses} fullWidth  />
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
          {/* <Autocomplete
            options={allCountries}
            getOptionLabel={(option) => option.label}
            renderInput={(props) => (
              <TextField {...props}  label="Select country" fullWidth />
            )}
            isOptionEqualToValue={(option,val)=>option.value===val.value}
            onChange={(_,value)=>formik.setFieldValue("country",value?.label||"")}
            value={country}
            disablePortal
            size="small"
            sx={{marginBottom: '20px'}}
          /> */}
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
          <StyledFormControl
            fullWidth
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "fit-content", alignSelf: "end", color: "white" }}
              onClick={() => input.current?.click()}
            >
              Choose your pdf file
            </Button>
          </StyledFormControl>
          <StyledFormControl
            fullWidth
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              color="warning"
              sx={{ width: "fit-content", alignSelf: "end" }}
              onClick={() => {
                formik.resetForm();
              }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ width: "fit-content", alignSelf: "end" }}
              type="submit"
            >
              Submit
            </Button>
          </StyledFormControl>
        </Form>
      </FormikProvider>
    </StyledMainContainer>
  );
};

export default EnrollForm;
