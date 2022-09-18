import { ReactNode } from 'react';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';

export enum NotificationType {
  Popup = 'popup',
  FlashMessage = 'flashMessage',
  Alert = 'alert',
}

export enum NotificationVariant {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Internal = 'internal',
}

interface DynamicNotification {
  content: ReactNode;
}

interface StaticNotification {
  content: string;
}

type NotificationWithContent = DynamicNotification | StaticNotification;

export const IgnorableTagsLocalStorageKey = 'notificationIgnorableTags';

export type NotificationDateTime = string;

export interface NotificationAction {
  label: string;
  icon?: ReactNode;
  callback?: () => void;
}

export type Notification = NotificationWithContent & {
  tag?: string;
  dataElm?: string;
  title?: string;
  variant?: NotificationVariant;
  actions?: NotificationAction[];
  startDate?: NotificationDateTime;
  endDate?: NotificationDateTime;
  maxWidth?: Breakpoint;
  persistIgnorableTagToContext?: boolean;
  persistIgnorableTagToLocalStorage?: boolean;
  showOnce?: boolean;
  disableCloseButton?: boolean;
};

export type InternalNotification = Notification & {
  type: NotificationType;
  id: string;
  open: boolean;
  variant: NotificationVariant;
};

export interface NotificationQueue {
  items: InternalNotification[];
  ignorableTags: string[];
}
