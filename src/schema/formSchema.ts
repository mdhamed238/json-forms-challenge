import { JsonSchema } from '@jsonforms/core';

export const formSchema: JsonSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      minLength: 1
    },
    countries: {
      type: 'array',
      title: 'Countries',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            title: 'Country'
          },
          percentage: {
            type: 'number',
            title: 'Percentage',
            minimum: 0,
            maximum: 100
          }
        },
        required: ['country', 'percentage']
      }
    }
  },
  required: ['name', 'countries']
};