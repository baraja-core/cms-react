import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { brjSelector, useBrjSelector } from '../../redux/state';
import { CasLoginResponse, CasVerifyOAuthResponse, loadCasDefault, selectOrganisation } from '../../redux/cas';
import { NotificationVariant } from '../../core/notification/NotificationContext';
import { UserStatus } from '../../core/cas/userStatus';
import { apiClient } from '../../redux/apiClient';
import { setIdentity, setOAuthStatus } from '../../redux/cmsIdentity';
import useNotification from '../useNotification';

export const useCas = () => {
  const dispatch = useDispatch();
  const { createFlashMessage } = useNotification();

  const cas = useBrjSelector((state) => brjSelector(state).cas);

  useEffect(() => {
    if (cas.success) return;
    dispatch(loadCasDefault());
  }, []);

  const getOrganisations = () => cas.organisations;

  const getContextOrganisation = () =>
    getOrganisations().find((organisation) => organisation.slug === cas.selectedOrganisation);

  const setOrganisation = (organisationSlug: string) => dispatch(selectOrganisation(organisationSlug));

  const verifyOAuthStatus = (code: string) => {
    if (!code) return;
    dispatch(setOAuthStatus(undefined));
    apiClient.post<CasVerifyOAuthResponse>(`api/v1/cas/verify-oauth`, { code: code }).then((response) => {
      if (!response.data.ok)
        createFlashMessage({ content: 'Authentication code is not correct.', variant: NotificationVariant.Error });
      dispatch(setOAuthStatus(response.data.ok));
    });
  };

  const getUserStatus = (id: number): UserStatus => {
    return UserStatus.offline;
  };

  const logout = () => apiClient.post<CasLoginResponse>(`api/v1/cas/logout`).then(() => dispatch(setIdentity(null)));

  return { getOrganisations, getContextOrganisation, setOrganisation, verifyOAuthStatus, getUserStatus, logout };
};
