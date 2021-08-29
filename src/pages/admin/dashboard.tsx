import useUser from 'hooks/useUser';
import { useRouter } from 'next/dist/client/router';
import { FC, useEffect } from 'react';

const getRoute = (path: string): string => {
  const splited = path.split('/');
  return splited[splited.length - 1];
};

const Dashboard: FC = () => {
  const router = useRouter();
  const [userData] = useUser();

  useEffect(() => {
    const { route } = router;
    if (userData && !Object.keys(userData).length) router.push('/admin');

    console.log(getRoute(route));

    // if (!userData) router.push('/admin');
  }, [router]);

  return <div>hello world!</div>;
};

export default Dashboard;
