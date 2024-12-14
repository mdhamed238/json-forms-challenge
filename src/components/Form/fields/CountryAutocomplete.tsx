import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { countries } from "../../../data/countries";
import { CountryOption } from "./CountryOption";

interface CountryAutocompleteProps {
  data: string;
  path: string;
  handleChange: (path: string, value: any) => void;
  errors?: string[];
  label?: string;
  required?: boolean;
}

export const CountryAutocomplete: React.FC<CountryAutocompleteProps> = ({
  data,
  path,
  handleChange,
  errors,
  label = "Country",
  required = false,
}) => {
  const currentCountry = countries.find((c) => c.name === data);

  return (
    <Autocomplete
      value={currentCountry || null}
      options={countries}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <CountryOption {...props} country={option} />
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          required={required}
          error={errors?.length > 0}
          helperText={errors?.[0]}
        />
      )}
      onChange={(_, newValue) => {
        handleChange(path, newValue?.name || "");
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
    />
  );
};
