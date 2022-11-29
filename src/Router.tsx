import { Route, Routes } from 'react-router-dom';
import { BrjCmsCore } from './components/BrjCmsCore';
import { OneTimePasswordPage } from './pages/OneTimePasswordPage';
import { useCmsTitle } from './hook/useCmsTitle';
import useCmsIdentity from './hook/useCmsIdentity';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SetUserPasswordPage from './pages/SetUserPasswordPage';
import Error404 from './ui/Error/Error404';

const Router = () => {
  const { isLoggedIn, isOAuthOk } = useCmsIdentity();
  useCmsTitle();

  return (
    <Routes>
      <Route path="reset-password" element={<ResetPasswordPage />} />
      <Route path="set-user-password" element={<SetUserPasswordPage />} />
      {isLoggedIn() ? (
        isOAuthOk() ? (
          <>
            <Route path="*" element={<BrjCmsCore />} />
          </>
        ) : (
          <Route path="*" element={<OneTimePasswordPage />} />
        )
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;
