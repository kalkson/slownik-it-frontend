import { User, UserContext } from 'context/UserContext';
import { Dispatch, SetStateAction, useContext } from 'react';

const useUser = (): [User?, Dispatch<SetStateAction<User>>?] => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser hook should be used in UserContextProvider');
  }

  const { userData, setUserData } = context;
  return [userData, setUserData];
};

export default useUser;
