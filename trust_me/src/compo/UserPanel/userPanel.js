import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import MyResponsiveAppBar from '../navbar/navbar';

export default function Denemes() {
  return (
      <>
        <MyResponsiveAppBar />
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 128,
            height: 250,
            },
        }}
        >
            <Link to='/'><p>Back to Home</p></Link>
        <Paper elevation={3} />
        </Box>
    </>
  );
}