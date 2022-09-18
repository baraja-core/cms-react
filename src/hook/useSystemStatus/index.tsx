import { useEffect } from 'react';
import useNotification from '../useNotification';
import { NotificationVariant } from '../../core/notification/NotificationContext';

const useSystemStatus = () => {
  const { createFlashMessage } = useNotification();

  useEffect(() => {
    keepConnection();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  const isOnline = () => navigator.onLine;

  const isServer = () => typeof window === `undefined`;

  const updateOnlineStatus = () => {
    if (!isOnline()) return;
    createFlashMessage({
      content: 'The connection to the server has been successfully restored.',
      variant: NotificationVariant.Success,
      title: 'Connection info',
    });
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

  return { isOnline, isServer, reload };
};

export default useSystemStatus;
