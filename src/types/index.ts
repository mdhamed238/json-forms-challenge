export interface CountryData {
  code: string;
  name: string;
}

export interface CountryEntry {
  country: string;
  percentage: number;
}

export interface FormData {
  name: string;
  countries: CountryEntry[];
}

export interface ValidationError {
  message: string;
  dataPath?: string;
}

export interface ValidationResult {
  [key: string]: ValidationError[];
}