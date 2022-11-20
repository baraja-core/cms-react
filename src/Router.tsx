import { Route, Routes } from 'react-router-dom';
import { BrjCmsCore } from './components/BrjCmsCore';
import { useCmsTitle } from './hook/useCmsTitle';
import useCmsIdentity from './hook/useCmsIdentity';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SetUserPasswordPage from './pages/SetUserPasswordPage';
import Error404 from './ui/Error/Error404';

const Router = () => {
  const cmsIdentity = useCmsIdentity();
  useCmsTitle();

  return (
    <Routes>
      <Route path="reset-password" element={<ResetPasswordPage />} />
      <Route path="set-user-password" element={<SetUserPasswordPage />} />
      {cmsIdentity.isLoggedIn() ? (
        <>
          <Route path="*" element={<BrjCmsCore />} />
        </>
      ) : (
        <>
          <Route path="/" element={<LoginPage />} />
        </>
      )}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;
