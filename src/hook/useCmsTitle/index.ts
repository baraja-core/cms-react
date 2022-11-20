import { useCas } from '../useCas';
import { useEffect } from 'react';

export const useCmsTitle = () => {
  const { getContextOrganisation } = useCas();
  const organisation = getContextOrganisation();

  useEffect(() => setTitle(resolveTitle()), [organisation?.slug]);

  const resolveTitle = () => {
    if (organisation) return `CMS ${organisation.name}`;

    return 'CMS';
  };

  const setTitle = (title: string) => {
    document.title = title;
  };

  return { resolveTitle, setTitle };
};
