import { FC } from 'react';
import useCmsIdentity from '../../hook/useCmsIdentity';
import Login from '../Login';
import reportWebVitals from '../../reportWebVitals';
import BrjCmsCoreInterface from './BrjCmsCoreInterface';

const BrjCmsCore: FC = () => {
  const cmsIdentity = useCmsIdentity();

  reportWebVitals((metric: any) => {
    console.log(metric);
  });

  return <>{cmsIdentity.isLoggedIn() ? <BrjCmsCoreInterface /> : <Login />}</>;
};

export default BrjCmsCore;
