import * as React from 'react';
import {Box, Stack} from '@mui/material/';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import MyResponsiveAppBar from '../compo/navbar/navbar';

const tiers = [
  {
    title: 'Amatör',
    price: '15',
    description: [
      'Nem ve Sıcaklık',
      '2 Aylık Ücretsiz',
      'Müşteri Desteği',
      'Email+SMS hizmeti',
    ],
    buttonText: 'Satın almak için Tıkla',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'En çok tercih',
    price: '30',
    description: [
      'Nem Sıcaklık Basınç ve Mineral',
      'ilk 3 ay Ücretsiz',
      'Müşteri Desteği',
      'SMS+E-mail+Çağrı Desteği',
    ],
    buttonText: 'Satın almak için Tıkla',
    buttonVariant: 'contained',
  },
  {
    title: 'Süper',
    price: '50',
    description: [
      'Sıcaklık Nem Basınç Mineral Böcek Kontrolu ve Sigorta',
      '3 ay Ücretsiz sonrası %10 indirim',
      'Müşteri Desteğinde Sıra yok',
      'Özelleştirilebilir Bildirim Paneli',
    ],
    buttonText: 'Tam Kontrolü seviyorsan, Tıkla',
    buttonVariant: 'outlined',
  },
];

export default function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline/>
      <MyResponsiveAppBar/>
      <Stack sx={{mt: 3}} >
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Paketler
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Basınç Sıcaklık Nem Böcek Tespiti Uyarı Sistemleri gibi paketleri kendi tercihinze göre alabilirsiniz.
          <br></br>Ücretlere KDV Dahildir.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /Ay
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Stack>
    </React.Fragment>
  );
}