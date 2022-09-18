import { ReactNode } from 'react';
import { Alert, Box, Stack } from '@mui/material';
import { AlertColor } from '@mui/material/Alert/Alert';
import { NotificationType, NotificationVariant } from '../../../core/notification/NotificationContext';
import useNotification from '../../../hook/useNotification';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import InfoIcon from '@mui/icons-material/Info';
import KeyIcon from '@mui/icons-material/Key';

const FlashMessage = () => {
  const { getFilteredQueue, closeNotification } = useNotification();

  const icons: Record<NotificationVariant, ReactNode> = {
    [NotificationVariant.Success]: <DoneIcon />,
    [NotificationVariant.Error]: <ErrorIcon />,
    [NotificationVariant.Warning]: <ReportProblemIcon />,
    [NotificationVariant.Info]: <InfoIcon />,
    [NotificationVariant.Internal]: <KeyIcon />,
  };

  return (
    <Box sx={{ position: 'fixed', left: '3em', bottom: '3em', zIndex: 1000, width: '300px' }}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        {getFilteredQueue(NotificationType.FlashMessage).map((flashMessage) => (
          <Alert
            key={flashMessage.id}
            icon={icons[flashMessage.variant]}
            onClose={() => closeNotification(flashMessage.id)}
            severity={flashMessage.variant as AlertColor}
          >
            {flashMessage.content}
          </Alert>
        ))}
      </Stack>
    </Box>
  );
};

export default FlashMessage;
