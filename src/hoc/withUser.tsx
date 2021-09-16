import { FC, useEffect, useState } from 'react';
import authToken from 'api/auth/token_auth';
import useUser from 'hooks/useUser';
import useLoading from 'hooks/useLoading';
import { useRouter } from 'next/dist/client/router';

const withUser =
  (WrappedComponent: FC): (() => JSX.Element | (() => Promise<boolean>)) =>
  () => {
    const [userData, setUserData] = useUser();
    const [isFetched, setFetched] = useState(false);

    const router = useRouter();

    const [, setLoading] = useLoading();

    useEffect(() => {
      setLoading(true);

      async function fetchData() {
        const user = await authToken();
        if (user && setUserData) setUserData(user);
        setFetched(true);
        setLoading(false);
        router.push('/admin/dashboard');
      }

      if (userData && !Object.keys(userData).length) fetchData();
      else {
        setFetched(true);
        setLoading(false);
      }
    }, [userData, setLoading]);

    const NestedComponent = <WrappedComponent />;
    const LoadingState = <></>;

    if (isFetched && userData) return NestedComponent;
    if (isFetched) return () => router.push('/admin');
    return LoadingState;
  };

export default withUser;
