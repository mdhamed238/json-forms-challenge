import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { countries } from "../data/countries";

const CountryAutocomplete = ({ data, path, handleChange, errors }: any) => {
  const currentCountry = countries.find((c) => c.name === data);

  return (
    <Autocomplete
      value={currentCountry || null}
      options={countries}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <li {...props}>
          <img
            loading='lazy'
            width='20'
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt={option.name}
            style={{ marginRight: 8 }}
          />
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Country'
          error={errors?.length > 0}
          helperText={errors}
        />
      )}
      onChange={(_, newValue) => {
        handleChange(path, newValue?.name || "");
      }}
    />
  );
};

export default withJsonFormsControlProps(CountryAutocomplete);
