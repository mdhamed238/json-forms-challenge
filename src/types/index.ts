import { CountryCode, CountryName } from "../data/countries";

export interface CountryData {
  code: CountryCode;
  name: CountryName;
}

export interface DistsEntry {
  country: CountryName;
  percentage: number;
}

export interface FormData {
  name: string;
  dists: DistsEntry[];
}

export interface ValidationError {
  message: string;
  dataPath?: string;
}

export interface ValidationResult {
  [key: string]: ValidationError[];
}
