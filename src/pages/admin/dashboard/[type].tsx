import { useRouter } from 'next/dist/client/router';
import { FC, useCallback, useEffect } from 'react';
import Container from 'components/Container/Container';
import PanelNavigation from 'components/PanelNavigation/PanelNavigation';
import withUser from 'hoc/withUser';
import fetchPendingTerms from 'api/terms/fetchPending';
import { NextPageContext } from 'next';

const trimRoute = (route: string): string => {
  const splited = route.split('/');
  return splited[splited.length - 1];
};

const Panel: FC = () => {
  const router = useRouter();

  const { asPath: route } = router;

  const getRoute = useCallback(() => trimRoute(route), [route]);

  useEffect(() => {
    async function fetchData() {
      const pendingTerms = await fetchPendingTerms();
      console.log(pendingTerms);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <PanelNavigation route={getRoute()} />
    </Container>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  console.log(context);

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default withUser(Panel);
