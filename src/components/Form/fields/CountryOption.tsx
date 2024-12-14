import React from 'react';
import { CountryData } from '../../../types';

interface CountryOptionProps extends React.HTMLAttributes<HTMLLIElement> {
  country: CountryData;
}

export const CountryOption: React.FC<CountryOptionProps> = ({ country, ...props }) => (
  <li {...props}>
    <img
      loading="lazy"
      width="20"
      src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
      alt={country.name}
      style={{ marginRight: 8 }}
    />
    {country.name}
  </li>
);