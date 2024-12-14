import { UISchemaElement } from "@jsonforms/core";

export const uiSchema: UISchemaElement = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/name",
      label: "Nom",
      options: {
        format: "text",
      },
    },
    {
      type: "Control",
      scope: "#/properties/dists",
      label: "Distributions",
      options: {
        showSortButtons: false,
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/country",
              options: {
                showUnfocusedDescription: true,
              },
            },
            {
              type: "Control",
              scope: "#/properties/percentage",
              options: {
                showUnfocusedDescription: true,
              },
            },
          ],
        },
      },
    },
  ],
};
