import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { CountryData } from '../../types';
import { countries } from '../../data/countries';
import { renderCountryOption } from './CountryOption';

const CountryAutocomplete = ({ data, path, handleChange, errors }: any) => {
  const currentCountry = countries.find(c => c.code === data);

  return (
    <Autocomplete
      value={currentCountry || null}
      options={countries}
      getOptionLabel={(option) => option.name}
      renderOption={renderCountryOption}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Country"
          error={errors?.length > 0}
          helperText={errors}
        />
      )}
      onChange={(_, newValue) => {
        handleChange(path, newValue?.code || '');
      }}
    />
  );
};

export default withJsonFormsControlProps(CountryAutocomplete);