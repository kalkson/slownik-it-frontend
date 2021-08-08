import { FC } from 'react';
import StyledSnackbarNotificaton from './SnackbarNotification.styled';

interface NotificationProps {
  type: 'error' | 'info' | 'warning' | 'loading' | 'success';
}

const SnackbarNotification: FC<NotificationProps> = ({
  type,
  children,
  ...props
}) => (
  <StyledSnackbarNotificaton {...props} type={type} role="alert">
    {children}
  </StyledSnackbarNotificaton>
);

export default SnackbarNotification;
