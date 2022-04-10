import React, { FC, useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LoginEasterEgg from "./LoginEasterEgg";
import LoginHelpCenter from "./LoginHelpCenter";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginHeader from "./LoginHeader";

interface LoginForm {
  username: string;
  password: string;
  permanentLogin: boolean;
}

const Login: FC = () => {
  const projectName = "Baraja web";

  const [locale, setLocale] = useState("cs");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      username: "",
      password: "",
      permanentLogin: false,
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    alert(data.username);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          sx={{
            borderRadius: "0.25rem",
            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
          }}
        >
          <LoginHeader locale={locale} projectName={projectName} />
          <Grid
            container
            sx={{ background: "white", borderBottom: "1px solid #e9ecef" }}
          >
            <Grid item md={12} sx={{ padding: 2 }}>
              <LoginEasterEgg username={watch("username")} />
              <FormGroup>
                <TextField
                  {...register("username", {
                    required: "Username is required.",
                  })}
                  variant="standard"
                  label="Username"
                  error={Boolean(errors.username)}
                  helperText={errors.username?.message}
                  tabIndex={1}
                />
              </FormGroup>
              <FormGroup sx={{ marginTop: 3 }}>
                <TextField
                  {...register("password", {
                    required: "Password is required.",
                  })}
                  type="password"
                  variant="standard"
                  label="Password"
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  tabIndex={2}
                />
              </FormGroup>
              <Box sx={{ marginTop: 3 }}>
                <Button type="submit" variant="contained" tabIndex={3}>
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ background: "white", padding: ".5em 0" }}>
            <Grid item md={8} sx={{ paddingLeft: 2 }}>
              <FormControlLabel
                control={<Switch {...register("permanentLogin")} />}
                label="Stay signed in"
              />
            </Grid>
            <Grid item md={4} sx={{ textAlign: "right", paddingRight: 2 }}>
              <LoginHelpCenter />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
