import { NotificationType } from './NotificationContext';

const resolveIgnorableTag = (tag: string | undefined, type: NotificationType): string => (tag ? `${type}_${tag}` : '');

export default resolveIgnorableTag;
