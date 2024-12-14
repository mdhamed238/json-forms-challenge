import { withJsonFormsControlProps } from "@jsonforms/react";
import { rankWith, isStringControl } from "@jsonforms/core";
import { CountryAutocomplete } from "../fields/CountryAutocomplete";

const CountryCell = (props: any) => <CountryAutocomplete {...props} />;

export const countryCellTester = rankWith(3, isStringControl);

export default withJsonFormsControlProps(CountryCell);
