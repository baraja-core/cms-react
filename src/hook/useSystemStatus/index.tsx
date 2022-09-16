import { useEffect } from 'react';
import useNotification, { FlashMessageVariant } from '../useNotification';

const useSystemStatus = () => {
  const { flashMessage } = useNotification();

  const init = () => {
    useEffect(() => {
      keepConnection();
      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    }, []);
  };

  const isOnline = () => navigator.onLine;

  const isServer = () => typeof window === `undefined`;

  const updateOnlineStatus = () => {
    const online = isOnline();
    useEffect(() => {
      if (!online) return;
      flashMessage('The connection to the server has been successfully restored.', {
        variant: FlashMessageVariant.Success,
        title: 'Connection info',
      });
    }, [online]);
  };

  const reload = () => {
    location.reload();
  };

  const keepConnection = () => {
    if (!isOnline()) {
      return;
    }
    // TODO: Call cms/keep-connection and if !req.data.login => reload()
  };

  return { init, isOnline, isServer, reload };
};

export default useSystemStatus;
