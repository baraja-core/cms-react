import { Box, Stack } from '@mui/material';
import { MessageBar, MessageBarType } from '@fluentui/react';
import { NotificationType, NotificationVariant } from '../../../core/notification/NotificationContext';
import useNotification from '../../../hook/useNotification';

const FlashMessage = () => {
  const { getFilteredQueue, closeNotification } = useNotification();

  const variants: Record<NotificationVariant, MessageBarType> = {
    [NotificationVariant.Success]: MessageBarType.success,
    [NotificationVariant.Error]: MessageBarType.error,
    [NotificationVariant.Warning]: MessageBarType.warning,
    [NotificationVariant.Info]: MessageBarType.info,
    [NotificationVariant.Internal]: MessageBarType.blocked,
  };

  const queue = getFilteredQueue(NotificationType.FlashMessage);

  return (
    <>
      {queue.length > 0 && (
        <Box sx={{ position: 'fixed', left: '3em', bottom: '3em', zIndex: 1000, width: '300px' }}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            {queue.map((flashMessage) => (
              <MessageBar
                key={flashMessage.id}
                messageBarType={variants[flashMessage.variant]}
                onDismiss={() => closeNotification(flashMessage.id)}
                dismissButtonAriaLabel="Close"
                truncated={true}
                isMultiline={false}
                overflowButtonAriaLabel="See more"
              >
                {flashMessage.content}
              </MessageBar>
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
};

export default FlashMessage;
