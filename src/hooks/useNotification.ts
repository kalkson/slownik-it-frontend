import { SnackbarContext } from 'context/SnackbarContext';
import { useContext } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useHandle = (): {
  [key: string]: (arg0: string) => void;
} => {
  const context = useContext(SnackbarContext);

  const handleError = (message: string) => {
    if (context) context.updateNotifications({ message, type: 'error' });
  };

  const handleInfo = (message: string) => {
    if (context) context.updateNotifications({ message, type: 'info' });
  };

  const handleWarning = (message: string) => {
    if (context) context.updateNotifications({ message, type: 'warning' });
  };

  const handleSuccess = (message: string) => {
    if (context) context.updateNotifications({ message, type: 'success' });
  };

  const handleLoading = (message: string) => {
    if (context) context.updateNotifications({ message, type: 'loading' });
  };

  return {
    handleError,
    handleInfo,
    handleWarning,
    handleSuccess,
    handleLoading,
  };
};

// export const useError = (): ((arg0: string) => void) => {
//   const context = useContext(SnackbarContext);
//   const handle = (message: string) => {
//     if (context) context.updateNotifications({ message, type: 'error' });
//   };

//   return handle;
// };

// export const useInfo = (): ((arg0: string) => void) => {
//   const context = useContext(SnackbarContext);
//   const handle = (message: string) => {
//     if (context) context.updateNotifications({ message, type: 'info' });
//   };

//   return handle;
// };

// export const useWarning = (): ((arg0: string) => void) => {
//   const context = useContext(SnackbarContext);
//   const handle = (message: string) => {
//     if (context) context.updateNotifications({ message, type: 'warning' });
//   };

//   return handle;
// };

// export const useSuccess = (): ((arg0: string) => void) => {
//   const context = useContext(SnackbarContext);
//   const handle = (message: string) => {
//     if (context) context.updateNotifications({ message, type: 'success' });
//   };

//   return handle;
// };

// export const useLoading = (): ((arg0: string) => void) => {
//   const context = useContext(SnackbarContext);
//   const handle = (message: string) => {
//     if (context) context.updateNotifications({ message, type: 'loading' });
//   };

//   return handle;
// };
