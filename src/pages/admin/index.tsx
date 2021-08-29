import LoginForm from 'components/LoginForm/LoginForm';
import { FC, useEffect } from 'react';
import * as cookie from 'cookie';
import { useRouter } from 'next/dist/client/router';
import { NextPageContext } from 'next/dist/shared/lib/utils';
import { User } from 'context/UserContext';
import useUser from 'hooks/useUser';

interface Props {
  user?: User;
}

const Admin: FC<Props> = ({ user }) => {
  const router = useRouter();
  const [userData, setUserData] = useUser();
  console.log(user);

  useEffect(() => {
    if (user) {
      if (setUserData) setUserData(user);
      console.log(userData);

      router.push('/admin/dashboard');
    }
  }, [router, user, setUserData, userData]);

  return <LoginForm />;
};

interface GetServerSidePropsReturnType {
  props: {
    user?: User;
  };
}

export const getServerSideProps = async (
  context: NextPageContext
): Promise<GetServerSidePropsReturnType | null> => {
  const parsedCookies = context.req
    ? cookie.parse(context.req.headers.cookie || '')
    : undefined;

  if (parsedCookies?.token) {
    const result: User = await fetch(`${process.env.API_URL}token_auth`, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: parsedCookies.token }),
    })
      .then((data) => data.json())
      .then((data) => data.user)
      .catch((response) => response);

    console.log(result);

    return {
      props: {
        user: {
          email: result.email,
          user_id: result.user_id,
        },
      },
    };
  }
  return { props: {} };
};

export default Admin;
