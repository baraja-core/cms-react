import React, { FC, useState } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import LoginHelpCenterBody from './LoginHelpCenterBody';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const LoginHelpCenterDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface DialogTitleProps {
  onClose: () => void;
}

const LoginHelpCenterTitle: FC<DialogTitleProps> = ({ onClose }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      Help center
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
};

const LoginHelpCenter: FC = () => {
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <>
      <Button variant="text" onClick={() => setHelpOpen(true)}>
        Need help?
      </Button>
      <LoginHelpCenterDialog onClose={() => setHelpOpen(false)} open={helpOpen} fullWidth>
        <LoginHelpCenterTitle onClose={() => setHelpOpen(false)} />
        <DialogContent dividers>
          <LoginHelpCenterBody />
        </DialogContent>
      </LoginHelpCenterDialog>
    </>
  );
};

export default LoginHelpCenter;
