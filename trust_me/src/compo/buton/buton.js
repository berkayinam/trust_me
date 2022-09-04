import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function acilSusamAcil(){

}

export default function BasicButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick = {acilSusamAcil} >{props.txt}</Button>
    </Stack>
  );
}