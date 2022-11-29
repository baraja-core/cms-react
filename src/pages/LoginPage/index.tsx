import React, { FC, useState } from 'react';
import { Box, Button, CircularProgress, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CenteredContent } from '../../ui/Page/CenteredContent';
import { Color } from '../../ui/palette';
import { useSettings } from '../../hook/useSettings';
import { useCas } from '../../hook/useCas';
import LoginEasterEgg from './LoginEasterEgg';
import LoginHelpCenter from './LoginHelpCenter';
import LoginHeader from './LoginHeader';
import AdminBar from '../../components/AdminBar';
import FlashMessage from '../../components/BrjCmsCore/FlashMessage';
import useCmsIdentity from '../../hook/useCmsIdentity';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

interface LoginForm {
  username: string;
  password: string;
  permanentLogin: boolean;
}

const LoginPage: FC = () => {
  const { isLoggedIn, login } = useCmsIdentity();
  const { getServerSettings } = useSettings();
  const { getContextOrganisation } = useCas();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogging, setLogging] = useState(false);

  const serverSettings = getServerSettings();
  const organisation = getContextOrganisation();
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
    setLogging(true);
    login(data.username, data.password, data.permanentLogin).then(() => setLogging(false));
  };

  return (
    <CenteredContent>
      <>
        <FlashMessage />
        {isLoggedIn() && <AdminBar />}
        {serverSettings ? (
          <>
            <LoginHeader />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  background: 'white',
                  borderBottom: '1px solid #e9ecef',
                  padding: 2,
                }}
              >
                {organisation?.description && <Box>{organisation.description}</Box>}
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
                    disabled={!Boolean(organisation)}
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
                    disabled={!Boolean(organisation)}
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
                  {isLogging ? (
                    <CircularProgress sx={{ color: Color.Orange }} />
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      tabIndex={3}
                      disabled={!username || !password || !Boolean(organisation)}
                    >
                      Login
                    </Button>
                  )}
                </Box>
              </Box>
            </form>
            <Box sx={{ display: 'flex', background: 'white', padding: '.5em 0' }}>
              <Box sx={{ width: '60%', paddingLeft: 2 }}>
                <FormControlLabel control={<Switch {...register('permanentLogin')} />} label="Stay signed in" />
              </Box>
              <Box sx={{ width: '40%', display: 'flex', justifyContent: 'right', paddingRight: 2 }}>
                <LoginHelpCenter />
              </Box>
            </Box>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', padding: '5em 0' }}>
            <CircularProgress sx={{ color: Color.Orange }} />
          </Box>
        )}
      </>
    </CenteredContent>
  );
};

export default LoginPage;
