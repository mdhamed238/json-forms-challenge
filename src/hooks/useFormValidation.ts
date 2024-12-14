import { useCallback } from 'react';
import { FormData } from '../types';

export interface ValidationError {
  message: string;
  dataPath?: string;
}

export interface ValidationResult {
  [key: string]: ValidationError[];
}

export const useFormValidation = () => {
  return useCallback((data: FormData): ValidationResult => {
    const errors: ValidationResult = {};
    
    if (data.countries?.length > 0) {
      const total = data.countries.reduce((sum, item) => sum + (item.percentage || 0), 0);
      if (total !== 100) {
        errors.countries = [{
          message: `Total percentage must be 100%. Current total: ${total}%`,
          dataPath: '/countries'
        }];
      }
    }
    
    return errors;
  }, []);
};