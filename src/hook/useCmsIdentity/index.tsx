import { brjSelector, useBrjSelector } from '../../redux/state';
import { useDispatch } from 'react-redux';
import { setIdentity } from '../../redux/cmsIdentity';

const useCmsIdentity = () => {
  const dispatch = useDispatch();

  const cmsIdentity = useBrjSelector((state) => brjSelector(state).cmsIdentity);

  const isLoggedIn = () => cmsIdentity?.isLoggedIn;

  const getIdentity = () => cmsIdentity;

  const login = (username: string, password: string, permanentLogin: boolean) => {
    // alert(username + ", " + password + ", " + permanentLogin);
    dispatch(
      setIdentity({
        username,
        fullName: 'Jan Barášek',
        avatarUrl: 'https://baraja.cz/content/jan-barasek.jpg',
        isLoggedIn: true,
      })
    );
  };

  return {
    isLoggedIn,
    getIdentity,
    login,
  };
};

export default useCmsIdentity;
