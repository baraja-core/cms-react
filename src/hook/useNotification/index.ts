import { v4 as uuidv4 } from 'uuid';
import {
  IgnorableTagsLocalStorageKey,
  Notification,
  NotificationType,
  NotificationVariant,
} from '../../core/notification/NotificationContext';
import { useSettings } from '../useSettings';
import resolveIgnorableTag from '../../core/notification/resolveIgnorableTag';

const useNotification = () => {
  const { settings, updateSettings } = useSettings();

  const createPopup = (configuration: Notification) => createNotification(configuration, NotificationType.Popup);

  const createFlashMessage = (configuration: Notification) =>
    createNotification(configuration, NotificationType.FlashMessage);

  const createAlert = (configuration: Notification) => createNotification(configuration, NotificationType.Alert);

  const createNotification = (configuration: Notification, type: NotificationType) => {
    const queue = settings.notificationQueue;
    const tag = configuration.tag ?? configuration.dataElm;
    const ignorableTag = resolveIgnorableTag(tag, type);
    if (isNotificationIgnored(configuration, type, ignorableTag)) {
      console.debug(`Notification with tag '${ignorableTag}' has been ignored.`);
      return;
    }
    if (ignorableTag && configuration.persistIgnorableTagToLocalStorage) {
      const ls = localStorage.getItem(IgnorableTagsLocalStorageKey);
      localStorage.setItem(IgnorableTagsLocalStorageKey, `${ls ? `${ls}|` : ''}${ignorableTag}`);
    }
    updateSettings({
      notificationQueue: {
        ...queue,
        ignorableTags:
          ignorableTag && configuration.persistIgnorableTagToContext
            ? [...queue.ignorableTags, ignorableTag]
            : queue.ignorableTags,
        items: [
          ...queue.items,
          {
            id: `${tag ? `${tag}_` : ''}${uuidv4()}`,
            type: type,
            open: true,
            tag: tag,
            variant: configuration.variant ?? NotificationVariant.Info,
            ...configuration,
          },
        ],
      },
    });
  };

  const isNotificationIgnored = (
    configuration: Notification,
    type: NotificationType,
    ignorableTag: string
  ): boolean => {
    if (configuration.showOnce && !ignorableTag) {
      console.warn('Notification can not be ignored when tag has not been defined.');
    } else if (ignorableTag) {
      if (configuration.showOnce && getIgnorableTags().includes(ignorableTag)) return true;
    } else if (configuration.persistIgnorableTagToContext || configuration.persistIgnorableTagToLocalStorage) {
      console.error('Notification can not be marked as ignorable when tag has not been defined.');
    }

    return false;
  };

  const getQueue = () => settings.notificationQueue.items;

  const getFilteredQueue = (type: NotificationType | undefined = undefined) =>
    getQueue().filter(
      (item) =>
        item.open &&
        (type === undefined || item.type === type) &&
        !(
          (item.startDate && Date.parse(item.startDate) > Date.now()) ||
          (item.endDate && Date.parse(item.endDate) < Date.now())
        )
    );

  const isQueueEmpty = (type: NotificationType | undefined = undefined) => getFilteredQueue(type).length === 0;

  const getIgnorableTags = (): string[] => {
    const ls = localStorage.getItem(IgnorableTagsLocalStorageKey);
    return [...settings.notificationQueue.ignorableTags, ...(ls ? ls.split('|') : [])];
  };

  const closeNotification = (id: string) =>
    updateSettings({
      notificationQueue: {
        ...settings.notificationQueue,
        items: settings.notificationQueue.items.map((item) => ({ ...item, open: item.id === id ? false : item.open })),
      },
    });

  const closeActivePopup = () => closeActiveNotification(NotificationType.Popup);

  const closeActiveNotification = (type: NotificationType | undefined = undefined) =>
    closeNotification(String(getActiveNotification(type)?.id));

  const closeAllNotifications = (type: NotificationType | undefined = undefined) =>
    updateSettings({
      notificationQueue: {
        ...settings.notificationQueue,
        items: settings.notificationQueue.items.map((item) => ({
          ...item,
          open: type === undefined || item.type === type ? false : item.open,
        })),
      },
    });

  const getActiveNotification = (type: NotificationType | undefined = undefined) =>
    getFilteredQueue(type).find((item) => item.open);

  return {
    createPopup,
    createFlashMessage,
    createAlert,
    getQueue,
    getFilteredQueue,
    isQueueEmpty,
    getIgnorableTags,
    closeNotification,
    closeActivePopup,
    closeActiveNotification,
    closeAllNotifications,
    getActiveNotification,
  };
};

export default useNotification;
