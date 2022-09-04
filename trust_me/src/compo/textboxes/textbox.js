import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function MyTextField(props) {
  return (
    <Stack
    component="form"
    sx={{width: '25ch'}}
    spacing={2}
    noValidate
    autoComplete="off"
    margin='5px'
  >
    <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      placeholder={props.txt}
      variant="filled"
      size="small"
    />
  </Stack>
  );
}