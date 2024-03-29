import { brjSelector, useBrjSelector } from '../../redux/state';
import { CasLoginResponse } from '../../redux/cas';
import { NotificationVariant } from '../../core/notification/NotificationContext';
import { apiClient } from '../../redux/apiClient';
import { useDispatch } from 'react-redux';
import { OAuthStatus, setIdentity } from '../../redux/cmsIdentity';
import useNotification from '../useNotification';

const useCmsIdentity = () => {
  const dispatch = useDispatch();

  const { createFlashMessage } = useNotification();

  const cmsIdentity = useBrjSelector((state) => brjSelector(state).cmsIdentity);

  const isLoadingIdentity = () => !cmsIdentity.loaded;

  const isLoggedIn = () => Boolean(cmsIdentity.identity?.isLoggedIn);

  const isOAuthOk = () => (isLoggedIn() ? Boolean(cmsIdentity.identity?.isOAuthOk) : true);

  const getOAuthStatus = (): OAuthStatus =>
    cmsIdentity.identity?.isOAuthOk === undefined
      ? OAuthStatus.Waiting
      : cmsIdentity.identity?.isOAuthOk
      ? OAuthStatus.Ok
      : OAuthStatus.NotOk;

  const getIdentity = () => cmsIdentity.identity;

  const login = async (username: string, password: string, permanentLogin: boolean) => {
    const response = (
      await apiClient.post<CasLoginResponse>(`api/v1/cas/login`, {
        username: username,
        password: password,
        permanent: permanentLogin,
      })
    ).data;
    if (response.isLoggedIn && !response.errorMessage) {
      createFlashMessage({ content: <>Welcome back {response.fullName}</>, variant: NotificationVariant.Success });
      dispatch(
        setIdentity({
          identityId: response.identityId,
          username: username,
          fullName: response.fullName,
          avatarUrl: response.avatarUrl,
          isLoggedIn: true,
          isOAuthOk: !response.requireOtp,
        })
      );
    } else {
      createFlashMessage({
        content: <>{response.errorMessage ?? 'Login failed.'}</>,
        variant: NotificationVariant.Error,
      });
    }
  };

  return {
    isLoadingIdentity,
    isLoggedIn,
    isOAuthOk,
    getOAuthStatus,
    getIdentity,
    login,
  };
};

export default useCmsIdentity;
