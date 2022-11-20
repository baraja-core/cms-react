import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { brjSelector, useBrjSelector } from '../../redux/state';
import { loadSettings, setSettingsDiff, SettingsDiff } from '../../redux/settings';

export const useSettings = () => {
  const dispatch = useDispatch();

  const settings = useBrjSelector((state) => brjSelector(state).settings);

  useEffect(() => {
    if (settings.serverSettings || settings.loading) return;
    dispatch(loadSettings());
  }, []);

  const getServerSettings = () => settings.serverSettings;

  const updateSettings = (settings: SettingsDiff) => dispatch(setSettingsDiff(settings));

  return { settings, getServerSettings, updateSettings };
};
