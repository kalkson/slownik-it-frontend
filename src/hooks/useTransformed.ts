import { HeaderContext } from 'context/HeaderContext';
import { Dispatch, SetStateAction, useContext } from 'react';

const useTransformed = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error(
      'useTransformed hook should be used in HeaderContextProvider'
    );
  }

  const { isTransformed, setTransformed } = context;
  return [isTransformed, setTransformed];
};

export default useTransformed;
