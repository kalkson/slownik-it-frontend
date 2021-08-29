import authToken, { GetServerSidePropsReturnType } from 'api/auth/token_auth';
import useUser from 'hooks/useUser';
import { NextPageContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import { FC, useEffect } from 'react';
import * as cookie from 'cookie';
import { User } from 'context/UserContext';

const getRoute = (path: string): string => {
  const splited = path.split('/');
  return splited[splited.length - 1];
};

interface Props {
  user?: User;
}

const Panel: FC<Props> = ({ user }) => {
  const router = useRouter();
  const [userData, setUserData] = useUser();
  const { asPath: route } = router;

  useEffect(() => {
    if (user)
      if (setUserData) setUserData(user);
      else router.push('/admin');
  }, [router, userData, setUserData, user]);

  return <div>{getRoute(route)}</div>;
};

export const getServerSideProps = async (
  context: NextPageContext
): Promise<GetServerSidePropsReturnType | null> => {
  const parsedCookies = context.req
    ? cookie.parse(context.req.headers.cookie || '')
    : undefined;

  const result = await authToken(parsedCookies);

  return result;
};

export default Panel;
