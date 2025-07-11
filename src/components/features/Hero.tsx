import { Typography, Box, Stack, Button, Container } from '@mui/material';
import Espresso from '../../assets/images/espresso-coffee.png';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Container id='home' maxWidth='lg'>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          // minHeight: { xs: 'auto', md: '85vh' },
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' }, // Ensure this Box takes 50% of the width
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant='h1'
              component='h1'
              sx={{ fontSize: { xs: '3rem', md: '4rem' } }}
            >
              Coffee For All
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typography
              variant='h4'
              sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}
            >
              The coffee revolution starts now.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Button variant='contained' color='secondary' href='#coffee'>
              Order Now
            </Button>
          </motion.div>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: '50%' }, // Ensure this Box takes 50% of the width
            p: { xs: 1, md: 2 },
            textAlign: 'center',
          }}
        >
          <motion.img
            src={Espresso}
            alt='espresso coffee drink'
            loading='lazy'
            style={{
              width: '100%',
              borderRadius: '1rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
