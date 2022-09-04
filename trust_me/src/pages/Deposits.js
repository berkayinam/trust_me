import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Güncel Kazanç</Title>
      <Typography component="p" variant="h4">
        3,024.00 TL
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        20 Ağustos 2022
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Sera Durumu
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }} variant="h3">
        Sağlıklı
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Detaylı Görüntüle
        </Link>
      </div>
    </React.Fragment>
  );
}