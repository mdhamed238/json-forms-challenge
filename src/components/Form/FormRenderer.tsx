import React from 'react';
import { JsonForms } from '@jsonforms/react';
import {
  materialCells,
  materialRenderers
} from '@jsonforms/material-renderers';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';
import CountryCell, { countryCellTester } from './renderers/CountryCell';
import { FormData } from '../../types';
import { useFormValidation } from '../../hooks/useFormValidation';

const renderers = [
  ...materialRenderers,
  { tester: countryCellTester, renderer: CountryCell }
];

interface FormRendererProps {
  data: FormData;
  schema: JsonSchema;
  uischema: UISchemaElement;
  onChange: (state: any) => void;
}

export const FormRenderer: React.FC<FormRendererProps> = ({
  data,
  schema,
  uischema,
  onChange
}) => {
  const validate = useFormValidation();
  const validationErrors = validate(data);
  const additionalErrors = Object.entries(validationErrors)
    .flatMap(([_, errors]) => errors);

  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={renderers}
      cells={materialCells}
      onChange={onChange}
      validationMode="ValidateAndShow"
      additionalErrors={additionalErrors}
    />
  );
};