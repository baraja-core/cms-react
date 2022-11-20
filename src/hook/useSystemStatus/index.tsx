import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSettings } from '../../hook/useSettings';
import { useEffectOnce } from '../useEffectOnce';
import { setSettingsDiff } from '../../redux/settings';
import { apiClient } from '../../redux/apiClient';

export const KeepAuthInterval = 5000;

interface KeepConnectionResponse {
  login: boolean;
}

export const useSystemStatus = (registerHandler: boolean = false) => {
  const dispatch = useDispatch();
  const { settings } = useSettings();

  const [runner, setRunner] = useState<number>();

  useEffectOnce(() => {
    if (!registerHandler || settings.runnerRegistered) return;
    callKeepConnection();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
    setRunner(window.setInterval(callKeepConnection, KeepAuthInterval));
    dispatch(setSettingsDiff({ runnerRegistered: true }));

    return () => {
      clearInterval(runner);
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      dispatch(setSettingsDiff({ runnerRegistered: false }));
    };
  });

  const isOnline = () => Boolean(navigator.onLine);

  const isServer = () => typeof window === `undefined`;

  const updateOnlineStatus = () => {
    dispatch(setSettingsDiff({ online: isOnline() }));
  };

  const reload = () => {
    // eslint-disable-next-line no-restricted-globals
    location?.reload();
  };

  const callKeepConnection = () => {
    const lastCall = settings.keepAuthLastCall ?? 0;
    const time = Date.now();
    const delta = time - lastCall;
    console.log('keep connection delta', {
      lastCall: lastCall,
      time: time,
      delta: delta,
    });
    if (!isOnline()) return;

    apiClient
      .get<KeepConnectionResponse>(`api/v1/cms/keep-connection`)
      .then((response) => {
        dispatch(setSettingsDiff({ keepAuthOk: response.data.login, keepAuthLastCall: time }));
      })
      .catch(() => {
        dispatch(setSettingsDiff({ keepAuthOk: 'error', keepAuthLastCall: time }));
      });
  };

  return { isOnline, isServer, reload, callKeepConnection };
};
