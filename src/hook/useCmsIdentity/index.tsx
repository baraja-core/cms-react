import { brjSelector, useBrjSelector } from "../../redux/state";

const useCmsIdentity = () => {
  const cmsIdentity = useBrjSelector((state) => brjSelector(state).cmsIdentity);

  const isLoggedIn = () => Boolean(cmsIdentity);

  const getIdentity = () => cmsIdentity;

  const login = (
    username: string,
    password: string,
    permanentLogin: boolean
  ) => {};

  return {
    isLoggedIn,
    getIdentity,
    login,
  };
};

export default useCmsIdentity;
