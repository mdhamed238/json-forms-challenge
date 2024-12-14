import React from 'react';
import { Typography } from '@mui/material';

interface FormDebuggerProps {
  data: any;
}

export const FormDebugger: React.FC<FormDebuggerProps> = ({ data }) => (
  <div className="mt-4">
    <Typography variant="h6">Form Data:</Typography>
    <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
      {JSON.stringify(data, null, 2)}
    </pre>
  </div>
);