import SnackbarNotification from 'components/SnackbarNotification/SnackbarNotification';
import React, { FC } from 'react';
import StyledSnackbar from './Snackbar.styled';

export interface NotificationType {
  id?: string;
  message: string;
  type: 'error' | 'info' | 'warning' | 'loading' | 'success';
}

interface SnackbarProps {
  notifications: NotificationType[];
}

const Snackbar: FC<SnackbarProps> = ({ notifications }) => (
  <StyledSnackbar>
    {notifications.map(({ type, message, id }) => (
      <SnackbarNotification type={type} key={id}>
        {message}
      </SnackbarNotification>
    ))}
  </StyledSnackbar>
);

export default Snackbar;
