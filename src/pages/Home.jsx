import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h3" component="div">
        Phonebook welcome page
      </Typography>
    </Container>
  );
}
