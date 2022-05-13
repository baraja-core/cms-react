import React, { FC } from "react";
import {
  Box,
  Button,
  CircularProgress,
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
import useCmsIdentity from "../../hook/useCmsIdentity";
import useProjectInfo from "../../hook/useProjectInfo";
import theme from "../../theme/theme";

interface LoginForm {
  username: string;
  password: string;
  permanentLogin: boolean;
}

const Login: FC = () => {
  const { login } = useCmsIdentity();
  const { getProjectInfo } = useProjectInfo();

  const projectInfo = getProjectInfo();
  console.log("projectInfo", projectInfo);

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
    login(data.username, data.password, data.permanentLogin);
  };

  return (
    <Box
      sx={{
        background: theme.palette.background,
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <CssBaseline />
        <Grid
          sx={{
            borderRadius: "0.25rem",
            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
          }}
        >
          {!projectInfo.loading && projectInfo.data ? (
            <>
              <LoginHeader projectName={projectInfo.data.projectName} />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                  container
                  sx={{
                    background: "white",
                    borderBottom: "1px solid #e9ecef",
                  }}
                >
                  <Grid item md={12} sx={{ padding: 2 }}>
                    <LoginEasterEgg username={watch("username")} />
                    <FormGroup>
                      <TextField
                        {...register("username", {
                          required: "Username is required.",
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
                        {...register("password", {
                          required: "Password is required.",
                        })}
                        type="password"
                        variant="outlined"
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
              </form>
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
            </>
          ) : (
            <Box sx={{ textAlign: "center", padding: "5em 0" }}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
