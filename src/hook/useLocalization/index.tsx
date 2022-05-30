import { useDispatch } from 'react-redux';
import { Locale, setActiveLocale } from '../../redux/localization';
import { brjSelector, useBrjSelector } from '../../redux/state';

export const useLocalization = () => {
  const dispatch = useDispatch();

  const localization = useBrjSelector((state) => brjSelector(state).localization);

  const getLocale = (): string => localization.locale;

  const getAvailableLocales = (): Locale[] => localization.availableLocales;

  const setLocale = (locale: string) => dispatch(setActiveLocale({ locale: locale }));

  return {
    getLocale,
    getAvailableLocales,
    setLocale,
  };
};

export default useLocalization;
