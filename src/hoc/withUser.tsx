import { FC, useCallback, useEffect, useState } from 'react';
import authToken from 'api/auth/token_auth';
import useUser from 'hooks/useUser';
import useLoading from 'hooks/useLoading';
import { useRouter } from 'next/dist/client/router';
import { useHandle } from 'hooks/useNotification';
import { Term } from 'api/terms/types';

interface WithUserProps {
  data?: Term[];
  error?: 0 | 1;
}

const withUser = (WrappedComponent: FC): FC<WithUserProps> => {
  const NestedComponent: FC<WithUserProps> = (props) => {
    const [userData, setUserData] = useUser();
    const [isFetched, setFetched] = useState(false);

    console.log(props);

    const router = useRouter();

    const [, setLoading] = useLoading();
    const { handleError } = useHandle();

    const setFetchedAfterUserFetched = useCallback(() => {
      if (userData && Object.keys(userData).length) setFetched(true);
    }, [userData]);

    useEffect(() => {
      async function fetchData() {
        const user = await authToken();

        if (user && setUserData) {
          if (user.error) {
            handleError('Wytąpił błąd serwera');
            router.push('/');
            setLoading(false);
            return;
          }

          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { email, user_id } = user;

          setUserData({ email, user_id });
          setFetchedAfterUserFetched();
          setFetched(true);
          setLoading(false);

          if (router.route === '/admin') router.push('/admin/dashboard');
        } else if (router.route !== '/admin') router.push('/admin');
        else {
          setFetched(true);
          setLoading(false);
        }
      }

      if (userData && !Object.keys(userData).length) {
        setLoading(true);
        fetchData();
      } else {
        setFetched(true);
        setLoading(false);
      }
    }, []);

    const LoadingState = () => <></>;

    return (
      <>{isFetched ? <WrappedComponent {...props} /> : <LoadingState />}</>
    );
  };

  return NestedComponent;
};

export default withUser;
