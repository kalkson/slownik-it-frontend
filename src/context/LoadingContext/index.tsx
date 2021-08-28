import LoaderPopup from 'components/Loader/LoaderPopup';
import {
  createContext,
  FC,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

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
      <LoaderPopup isVisible={isLoading} />
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
