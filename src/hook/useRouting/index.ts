import { useLocation } from 'react-router-dom';

export const useRouting = () => {
  const { pathname } = useLocation();

  const getLocation = () => pathname;

  const getRoute = () => 'homepage';

  return { getLocation, getRoute };
};
