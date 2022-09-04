import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2022',
    'Başarılı',
    '%51,5Nem',
    '831/1000',
    23,
  ),
  createData(
    1,
    '17 Mar, 2022',
    'Başarılı',
    '%48Nem',
    '796/1000',
    24,
  ),
  createData(
    3,
    '18 Mar, 2022',
    'Başarılı',
    '%55Nem',
    '816/1000',
    20,
  ),
  createData(
    4,
    '19 Mar, 2022',
    'Başarılı',
    '%60Nem',
    '856/1000',
    21,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Son 5 Veri</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tarih</TableCell>
            <TableCell>Güncelleme</TableCell>
            <TableCell>Ort Nem</TableCell>
            <TableCell>Ort Mineral</TableCell>
            <TableCell align="right">Ort Sıcaklık</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}Celcius`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Daha Fazla Tarih Görüntüle
      </Link>
    </React.Fragment>
  );
}