import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../auth/AuthContext';
import Settings from './Settings';

const Header = () => {
  const navigate = useNavigate();

  const { logout } = useAuthContext();

  const backToHome = () => {
    navigate("/product", { replace: true });
  };
  const handleLogout = async () => {
    logout();
  };
  return (
    <AppBar position="fixed" color="inherit" sx={{ top: 0 }}>
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item xs={2} md={2}>
            <Grid container alignItems="center" justifyContent="start">
              <Grid item onClick={backToHome} sx={{ cursor: "pointer", ml: 2 }}>
                <Box>PRODUCT Management APP</Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7} md={7}>
            <Settings logout={handleLogout} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
