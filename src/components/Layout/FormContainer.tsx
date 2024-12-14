import React from "react";
import { Paper, Typography } from "@mui/material";

interface FormContainerProps {
  title: string;
  children: React.ReactNode;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  title,
  children,
}) => (
  <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
    <Paper className='w-full max-w-3xl p-8'>
      <Typography variant='h4' component='h1' gutterBottom>
        {title}
      </Typography>
      {children}
    </Paper>
  </div>
);
