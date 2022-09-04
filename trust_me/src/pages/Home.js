import * as React from 'react';
import { Typography } from '@mui/material';
import MyResponsiveAppBar from '../compo/navbar/navbar';

export default function Home()
{
    return (
        
        <div style={{width: '100%'}}>
            <MyResponsiveAppBar></MyResponsiveAppBar>
            <div style={{backgroundColor: "red", height : '100vh', marginTop : '10vh'}}>
            <Typography variant="h2" style={{marginTop: '50vh'}} gutterBottom component="div">
                OIT
            </Typography>
            <Typography variant="h2" gutterBottom component="div">
                SOLUTIONS
            </Typography>
            <Typography variant="h2" gutterBottom component="div">
                FOR
            </Typography>
            <Typography variant="h2" gutterBottom component="div">
                TOMORROW
            </Typography>
            </div>
            <div style={{backgroundColor: "yellow", height : '100vh', marginTop : '10vh'}}>
            <p>ase</p>
            </div>

        </div>
    );
}