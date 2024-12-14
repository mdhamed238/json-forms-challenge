import React, { useState, useCallback } from "react";
import { FormContainer } from "./components/Layout/FormContainer";
import { FormRenderer } from "./components/Form/FormRenderer";
import { FormDebugger } from "./components/Debug/FormDebugger";
import { schema, uiSchema } from "./schema";
import { FormData } from "./types";

const initialData: FormData = {
  name: "",
  dists: [
    {
      country: "France",
      percentage: 50,
    },
  ],
};

function App() {
  const [data, setData] = useState<FormData>(initialData);

  const handleFormChange = useCallback((state: any) => {
    setData(state.data);
  }, []);

  return (
    <FormContainer title='Country Distribution Form'>
      <FormRenderer
        data={data}
        schema={schema}
        uischema={uiSchema}
        onChange={handleFormChange}
      />
      <FormDebugger data={data} />
    </FormContainer>
  );
}

export default App;
