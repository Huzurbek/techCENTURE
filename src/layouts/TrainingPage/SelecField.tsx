// PLUGINS IMPORTS //
import React, { FC } from "react";

import { useField } from "formik";
import { at } from "lodash";
import {
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
} from "@mui/material";

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  data: Array<{ label: string; value: string }>;
  label?: string;
  name: string;
  fullWidth?: boolean;
}

const SelectField: FC<PropsType> = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, "touched", "error");
  const isError = touched && error && true;
  function renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl
      size="small"
      sx={{ marginBottom: "20px" }}
      {...rest}
      error={isError}
    >
      {/* <FormLabel component="legend" sx={{color: '#696984'}}>
      {label} 
              </FormLabel>  */}
      <Select {...field} value={selectedValue ? selectedValue : ""}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {renderHelperText()}
    </FormControl>
  );
};

export default SelectField;
