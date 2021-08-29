import LoginForm from 'components/LoginForm/LoginForm';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import useUser from 'hooks/useUser';

const Admin: FC = () => {
  const router = useRouter();
  const [userData] = useUser();

  useEffect(() => {
    if (userData && userData.email) router.push('/admin/dashboard');
  }, [userData]);

  return <LoginForm />;
};

export default Admin;
