import { Route, Routes } from 'react-router-dom';
import useCmsIdentity from './hook/useCmsIdentity';
import BrjCmsCoreInterface from './components/BrjCmsCore/BrjCmsCoreInterface';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SetUserPasswordPage from './pages/SetUserPasswordPage';

const Router = () => {
  const cmsIdentity = useCmsIdentity();

  return (
    <Routes>
      <Route path="reset-password" element={<ResetPasswordPage />} />
      <Route path="set-user-password" element={<SetUserPasswordPage />} />
      {cmsIdentity.isLoggedIn() ? (
        <>
          <Route path="*" element={<BrjCmsCoreInterface />} />
        </>
      ) : (
        <>
          <Route path="/" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
