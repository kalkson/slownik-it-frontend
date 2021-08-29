import LoginForm from 'components/LoginForm/LoginForm';
import { FC, useEffect } from 'react';
import * as cookie from 'cookie';
import { useRouter } from 'next/dist/client/router';
import { NextPageContext } from 'next/dist/shared/lib/utils';
import useUser from 'hooks/useUser';
import authToken, { GetServerSidePropsReturnType } from 'api/auth/token_auth';
import { User } from 'context/UserContext';

interface Props {
  user?: User;
}

const Admin: FC<Props> = ({ user }) => {
  const router = useRouter();
  const [userData, setUserData] = useUser();

  useEffect(() => {
    if (user) {
      if (setUserData) setUserData(user);

      router.push('/admin/dashboard');
    }
  }, [router, user, setUserData, userData]);

  return <LoginForm />;
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

export default Admin;
