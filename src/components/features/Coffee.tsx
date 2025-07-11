import products from '../../assets/coffee';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function Coffee() {
  return (
    <Box sx={{ my: 10 }} id='coffee'>
      <Typography variant='h5' sx={{ textAlign: 'center' }}>
        Featured Coffees
      </Typography>
      <Grid container spacing={3} sx={{ padding: 3, justifyContent: 'center' }}>
        {products.map((product: Product) => (
          <Grid key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                textAlign: 'center',
                padding: 2,
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
              <CardContent>
                <Typography variant='h6'>{product.title}</Typography>
                <Typography variant='body2' color='text.secondary'>
                  {product.description}
                </Typography>
                <Typography variant='h6' color='primary' sx={{ marginY: 1 }}>
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', mt: 1 }}>
                <Button variant='contained' color='secondary'>
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
