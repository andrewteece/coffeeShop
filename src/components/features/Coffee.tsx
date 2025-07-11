// import products from '../../assets/coffee';

import { useEffect, useState } from 'react';
import { fetchCoffees, type Product } from '../../api/coffeeApi';
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Grid,
} from '@mui/material';

// type Product = {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string;
// };

export default function Coffee() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoffees()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading coffee products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ my: 10, textAlign: 'center' }}>
        <Typography variant='h6'>Loading coffees...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ my: 10 }} id='coffee'>
      <Container maxWidth='lg'>
        <Typography variant='h5' align='center' gutterBottom>
          Featured Coffees
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ p: 3, justifyContent: 'center' }}
          alignItems='stretch'
        >
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  // maxWidth: 345,
                  // textAlign: 'center',
                  // p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component='img'
                  height='200'
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'cover', borderRadius: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant='h6'>{product.title}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {product.description}
                  </Typography>
                  <Typography variant='h6' color='primary' sx={{ my: 1 }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant='contained' color='secondary'>
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
