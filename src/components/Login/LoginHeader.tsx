import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import { Link, MenuItem, TextField } from "@mui/material";
import useLocalization from "../../hook/useLocalization";

interface LoginHeaderProps {
  projectName: string;
}

const LoginHeader: FC<LoginHeaderProps> = ({ projectName }) => {
  const { getLocale, getAvailableLocales, setLocale } = useLocalization();

  return (
    <Grid container sx={{ padding: 2, background: "#eee" }}>
      <Grid item md={8}>
        <Link
          href={`https://baraja.cz/cms?locale=${getLocale()}`}
          underline="always"
          target="_blank"
          rel="noreferrer"
          sx={{ color: "#555" }}
        >
          {projectName}
        </Link>
      </Grid>
      <Grid item md={4} sx={{ textAlign: "right" }}>
        <TextField
          select
          size="small"
          value={getLocale()}
          onChange={(e) => setLocale(e.target.value)}
        >
          {getAvailableLocales().map((localeItem) => (
            <MenuItem key={localeItem.locale} value={localeItem.locale}>
              {localeItem.flag ? localeItem.flag : localeItem.locale}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default LoginHeader;
