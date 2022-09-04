import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MyResponsiveAppBar from '../compo/navbar/navbar';
import Background from "../background2.jpg";
import '../App.css';

const cards = [{ id: 1, rut: '/buypage', Uptxt: 'Tarım', txt: 'Tarım çözümleri hakkında detaylı bilgi almak için lütfen tıkla'}, { id: 2, rut: '/buypage', Uptxt: 'Soğutma', txt: 'Gıda-Soğutma çözümleri hakkında detaylı bilgi almak için lütfen tıkla' }, { id: 3, rut: '/buypage' ,Uptxt: 'Güvenlik', txt: 'Yangın ve Ofis çözümleri hakkında detaylı bilgi almak için lütfen tıkla'}];

const theme = createTheme();

export default function UserHomepage() {
  return (
    <ThemeProvider theme={theme}>
      <MyResponsiveAppBar />
      <CssBaseline />
        <img src={Background} alt="" style={{position:"absolute", top:0,left:0,width:"100%",height:"100vh",zIndex:-100}}></img>
          <Stack>
          <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Ürün Çözümleri
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Tarım , Yangın , Gıda İot Solüsyon Paketimizi İnceleyin. Kontrolde ve mutlu olsun
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   pt: '56.25%',
                    // }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.Uptxt}
                    </Typography>
                    <Typography>
                     {card.txt}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href="/buypage"><Button size="small">Satın al</Button></Link>
                    <Button href={card.rut} size="small">Bilgi</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Stack>
    </ThemeProvider>
  );
}