import { OrganisationResponse } from '../../redux/cas';

export const resolveDefaultOrganisation = (organisations: OrganisationResponse[]) => {
  if (organisations.length === 1 && organisations[0]) return organisations[0];

  const findDefault = organisations.find((organisation) => organisation.default);
  if (findDefault) return findDefault;

  return organisations.find((organisation) => organisation.adminAccess);
};
