import { TextField, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";

interface IFormInputProps {
  form: FormikProps<any>;
  name: string;
  label: string;
}

export const FormInput: React.FC<IFormInputProps & TextFieldProps> = ({
  form,
  name,
  label,
  ...props
}) => {
  const { handleChange, errors, values } = form;
  return (
    <TextField
      label={label}
      name={name}
      onChange={handleChange}
      value={values[name]}
      error={Boolean(errors[name])}
      helperText={String(errors?.[name] || "")}
      {...props}
    />
  );
};
