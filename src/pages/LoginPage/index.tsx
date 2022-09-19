import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LoginEasterEgg from './LoginEasterEgg';
import LoginHelpCenter from './LoginHelpCenter';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSettings } from '../../hook/useSettings';
import LoginHeader from './LoginHeader';
import useCmsIdentity from '../../hook/useCmsIdentity';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import theme from '../../theme/theme';
import AdminBar from '../../components/AdminBar';

interface LoginForm {
  username: string;
  password: string;
  permanentLogin: boolean;
}

const LoginPage: FC = () => {
  const { login } = useCmsIdentity();
  const { getServerSettings } = useSettings();
  const [showPassword, setShowPassword] = useState(false);

  const serverSettings = getServerSettings();
  console.log('serverSettings', serverSettings);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      username: '',
      password: '',
      permanentLogin: false,
    },
  });

  const [username, password] = [watch('username'), watch('password')];

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    login(data.username, data.password, data.permanentLogin);
  };

  return (
    <Box
      sx={{
        background: theme.palette.background,
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <AdminBar />
      <Container maxWidth="sm">
        <CssBaseline />
        <Grid
          sx={{
            borderRadius: '0.25rem',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
          }}
        >
          {serverSettings ? (
            <>
              <LoginHeader projectName={serverSettings.projectName} />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                  container
                  sx={{
                    background: 'white',
                    borderBottom: '1px solid #e9ecef',
                  }}
                >
                  <Grid item md={12} sx={{ padding: 2 }}>
                    <LoginEasterEgg username={username} />
                    <FormGroup>
                      <TextField
                        {...register('username', {
                          required: 'Username is required.',
                        })}
                        variant="outlined"
                        label="Username"
                        error={Boolean(errors.username)}
                        helperText={errors.username?.message}
                        tabIndex={1}
                      />
                    </FormGroup>
                    <FormGroup sx={{ marginTop: 3 }}>
                      <TextField
                        {...register('password', {
                          required: 'Password is required.',
                        })}
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        label="Password"
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        tabIndex={2}
                        InputProps={{
                          endAdornment: (
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          ),
                        }}
                      />
                    </FormGroup>
                    <Box sx={{ marginTop: 3 }}>
                      <Button type="submit" variant="contained" tabIndex={3} disabled={!username || !password}>
                        Login
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
              <Grid container sx={{ background: 'white', padding: '.5em 0' }}>
                <Grid item md={8} sx={{ paddingLeft: 2 }}>
                  <FormControlLabel control={<Switch {...register('permanentLogin')} />} label="Stay signed in" />
                </Grid>
                <Grid item md={4} sx={{ textAlign: 'right', paddingRight: 2 }}>
                  <LoginHelpCenter />
                </Grid>
              </Grid>
            </>
          ) : (
            <Box sx={{ textAlign: 'center', padding: '5em 0' }}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginPage;
