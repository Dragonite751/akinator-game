import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Game from './Game';

function App() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Box mb={4}>
        <Typography variant="h3" gutterBottom>
          Exclusively for Gopuram Members
        </Typography>
      </Box>
      <Game />
    </Container>
  );
}

export default App;
