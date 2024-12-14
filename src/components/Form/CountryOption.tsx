import React from 'react';
import { CountryData } from '../../types';

export const renderCountryOption = (props: React.HTMLAttributes<HTMLLIElement>, option: CountryData) => (
  <li {...props}>
    <img
      loading="lazy"
      width="20"
      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
      alt={option.name}
      style={{ marginRight: 8 }}
    />
    {option.name}
  </li>
);