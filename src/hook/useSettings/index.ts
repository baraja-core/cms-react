import { useDispatch } from 'react-redux';
import { brjSelector, useBrjSelector } from '../../redux/state';
import { setSettingsDiff, SettingsDiff } from '../../redux/settings';

export const useSettings = () => {
  const dispatch = useDispatch();

  const settings = useBrjSelector((state) => brjSelector(state).settings);

  const updateSettings = (settings: SettingsDiff) => dispatch(setSettingsDiff(settings));

  return { settings, updateSettings };
};
