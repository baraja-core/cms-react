import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { brjSelector, useBrjSelector } from '../../redux/state';
import { apiClient } from '../../redux/apiClient';
import { ServerSettings, setSettingsDiff, SettingsDiff } from '../../redux/settings';

export const useSettings = () => {
  const dispatch = useDispatch();

  const settings = useBrjSelector((state) => brjSelector(state).settings);

  useEffect(() => {
    if (settings.serverSettings) return;
    apiClient.get<ServerSettings>(`api/v1/cms/settings`).then((data) => updateSettings({ serverSettings: data.data }));
  }, []);

  const getServerSettings = () => settings.serverSettings;

  const updateSettings = (settings: SettingsDiff) => dispatch(setSettingsDiff(settings));

  return { settings, getServerSettings, updateSettings };
};
