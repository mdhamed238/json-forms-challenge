import { useCallback } from "react";
import { FormData } from "../types";

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

    if (data.dists?.length > 0) {
      const total = data.dists.reduce(
        (sum, item) => sum + (item.percentage || 0),
        0
      );
      if (total !== 100) {
        errors.dists = [
          {
            message: `Le pourcentage total doit être de 100%. Total actuel : ${total}%`,
            dataPath: "/dists",
          },
        ];
      }
    }

    return errors;
  }, []);
};
