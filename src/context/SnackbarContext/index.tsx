import Snackbar, { NotificationType } from 'components/Snackbar/Snackbar';
import uniqid from 'uniqid';
import { createContext, FC, useState, useEffect } from 'react';

type ContextData = {
  updateNotifications: (notificationToAdd: NotificationType) => void;
  removeNotification: (id: string) => void;
};

export const SnackbarContext = createContext<ContextData | null>(null);

const AUTO_DISMISS = 4000;

const SnackbarContextProvider: FC = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    if (notifications.length > 0) {
      setTimeout(
        () =>
          // eslint-disable-next-line @typescript-eslint/no-shadow
          setNotifications((notifications) =>
            notifications.slice(0, notifications.length - 1)
          ),
        AUTO_DISMISS
      );
    }
  }, [notifications]);

  const removeNotification = (id: string): void => {
    const newNotifications = notifications.filter(
      ({ id: notificationId }) => id !== notificationId
    );
    setNotifications(newNotifications);
  };

  const updateNotifications = (notificationToAdd: NotificationType): void => {
    const id = uniqid();

    // eslint-disable-next-line @typescript-eslint/no-shadow
    setNotifications((notifications) => [
      { ...notificationToAdd, id },
      ...notifications,
    ]);
  };

  const value = {
    updateNotifications,
    removeNotification,
  };

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <Snackbar notifications={notifications} />
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
