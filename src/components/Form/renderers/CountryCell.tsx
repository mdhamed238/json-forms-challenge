import { withJsonFormsControlProps } from "@jsonforms/react";
import { rankWith, isStringControl, and, scopeEndsWith } from "@jsonforms/core";
import { CountryAutocomplete } from "../fields/CountryAutocomplete";

const CountryCell = (props: any) => <CountryAutocomplete {...props} />;

// Update the tester to only match fields that end with 'country'
export const countryCellTester = rankWith(
  3,
  and(isStringControl, scopeEndsWith("country"))
);

export default withJsonFormsControlProps(CountryCell);
