import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import { useLocalization } from "../useLocalization";

interface LoginHeaderProps {
  locale: string;
  projectName: string;
}

const LoginHeader: FC<LoginHeaderProps> = ({ locale, projectName }) => {
  const { getAvailableLocales } = useLocalization();

  return (
    <Grid container sx={{ padding: 2 }}>
      <Grid item md={8}>
        <Link
          href={`https://baraja.cz/cms?locale=${locale}`}
          underline="always"
          target="_blank"
          rel="noreferrer"
          sx={{ color: "#555" }}
        >
          {projectName}
        </Link>
      </Grid>
      <Grid item md={4} sx={{ textAlign: "right" }}>
        {getAvailableLocales().map((localeItem) => (
          <button key={localeItem.locale} onClick={() => localeItem}>
            {localeItem.flag ? localeItem.flag : localeItem.locale}
          </button>
        ))}
      </Grid>
    </Grid>
  );
};

export default LoginHeader;
