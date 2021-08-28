import { LoadingContext } from 'context/LoadingContext';
import { Dispatch, SetStateAction, useContext } from 'react';

const useLoading = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading hook should be used in LoadingContextProvider');
  }

  const { isLoading, setLoading } = context;
  return [isLoading, setLoading];
};

export default useLoading;
