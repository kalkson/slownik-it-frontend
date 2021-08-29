import authToken from 'api/auth/token_auth';
import useUser from 'hooks/useUser';
import Cookies from 'js-cookie';
import { FC, useEffect, useState } from 'react';

const UserLayout: FC = ({ children }) => {
  const [userData, setUserData] = useUser();
  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const user = await authToken(Cookies.get());
      if (user && setUserData) setUserData(user);
      setFetched(true);
    }

    if (userData && !Object.keys(userData).length) fetchData();
    else {
      setFetched(true);
    }
  }, [userData]);

  return <>{isFetched && children}</>;
};

export default UserLayout;
