import Snackbar, { NotificationType } from 'components/Snackbar/Snackbar';
import { randomUUID } from 'node:crypto';
import { createContext, FC, useState } from 'react';

type ContextData = {
  updateNotifications: (notificationToAdd: NotificationType) => void;
  removeNotification: (id: string) => void;
};

export const SnackbarContext = createContext<ContextData | null>(null);

const SnackbarContextProvider: FC = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const removeNotification = (id: string): void => {
    const newNotifications = notifications.filter(
      ({ id: notificationId }) => id !== notificationId
    );
    setNotifications(newNotifications);
  };

  const updateNotifications = (notificationToAdd: NotificationType): void => {
    const id = randomUUID();

    setNotifications([...notifications, { ...notificationToAdd, id }]);
    setTimeout(() => removeNotification(id), 4000);
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
