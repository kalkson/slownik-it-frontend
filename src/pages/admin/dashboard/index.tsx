import Container from 'components/Container/Container';
import PanelNavigation from 'components/PanelNavigation/PanelNavigation';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/dist/client/router';
import { FC, useEffect, useState } from 'react';

const Dashboard: FC = () => {
  const router = useRouter();
  const [userData] = useUser();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (userData && !Object.keys(userData).length) router.push('/admin');
    else setLoading(false);
  }, [userData]);

  return <Container>{!isLoading && <PanelNavigation />}</Container>;
};

export default Dashboard;
