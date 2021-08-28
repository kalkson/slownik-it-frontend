import LoaderPopup from 'components/Loader/LoaderPopup';
import { CSSTransition } from 'react-transition-group';
import { createContext, FC, useState, Dispatch, SetStateAction } from 'react';

type ContextData = {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const LoadingContext = createContext<ContextData | null>(null);

const LoadingContextProvider: FC = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const value = {
    isLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      <CSSTransition
        in={isLoading}
        timeout={200}
        classNames="loader"
        appear
        unmountOnExit
      >
        <LoaderPopup />
      </CSSTransition>
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
