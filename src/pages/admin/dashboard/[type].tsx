// import authToken, { GetServerSidePropsReturnType } from 'api/auth/token_auth';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/dist/client/router';
import { FC, useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import PanelNavigation from 'components/PanelNavigation/PanelNavigation';

const Panel: FC = () => {
  const router = useRouter();
  const [userData] = useUser();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (userData && !Object.keys(userData).length) router.push('/admin');
    else setLoading(false);
  }, []);

  return <Container>{!isLoading && <PanelNavigation />}</Container>;
};

export default Panel;
