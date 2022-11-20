import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { brjSelector, useBrjSelector } from '../../redux/state';
import { loadCasDefault, selectOrganisation } from '../../redux/cas';

export const useCas = () => {
  const dispatch = useDispatch();

  const cas = useBrjSelector((state) => brjSelector(state).cas);

  useEffect(() => {
    if (cas.success) return;
    dispatch(loadCasDefault());
  }, []);

  const getOrganisations = () => cas.organisations;

  const getContextOrganisation = () =>
    getOrganisations().find((organisation) => organisation.slug === cas.selectedOrganisation);

  const setOrganisation = (organisationSlug: string) => dispatch(selectOrganisation(organisationSlug));

  return { getOrganisations, getContextOrganisation, setOrganisation };
};
