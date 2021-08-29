import authToken from 'api/auth/token_auth';
import useUser from 'hooks/useUser';
import Cookies from 'js-cookie';
import { FC, useEffect } from 'react';

const UserLayout: FC = ({ children }) => {
  const [userData, setUserData] = useUser();

  useEffect(() => {
    async function fetchData() {
      const user = await authToken(Cookies.get());
      if (user && setUserData) setUserData(user);
      console.log(userData);
    }

    if (userData && !Object.keys(userData).length) fetchData();
  }, [userData]);

  return <>{children}</>;
};

export default UserLayout;
