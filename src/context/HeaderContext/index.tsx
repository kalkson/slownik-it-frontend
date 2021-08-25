import { createContext, FC, useState } from 'react';

const useProviderSettings = () => {
  const [isTransformed, setTransformed] = useState(false);

  return {
    isTransformed,
    setTransformed,
  };
};

export type SettingsContextData = ReturnType<typeof useProviderSettings>;

export const HeaderContext = createContext<SettingsContextData | null>(null);

const HeaderContextProvider: FC = ({ children }) => {
  const [isTransformed, setTransformed] = useState(true);

  const value = {
    isTransformed,
    setTransformed,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
