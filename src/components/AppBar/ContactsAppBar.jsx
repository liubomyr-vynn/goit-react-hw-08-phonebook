import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBar, Box, Container, Toolbar } from '@mui/material';

export const ContactsAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar >
            <Navigation />

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
