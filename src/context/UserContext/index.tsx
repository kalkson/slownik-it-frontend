import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

export type User = {
  email?: string;
  user_id?: string;
  error?: 0 | 1;
};

export interface SettingsContextData {
  userData: User;
  setUserData: Dispatch<SetStateAction<User>>;
}

export const UserContext = createContext<SettingsContextData | null>(null);

const UserContextProvider: FC = ({ children }) => {
  const [userData, setUserData] = useState({});

  const value = {
    userData,
    setUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
