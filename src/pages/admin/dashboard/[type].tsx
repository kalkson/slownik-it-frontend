import { useRouter } from 'next/dist/client/router';
import { FC, useCallback, useEffect } from 'react';
import Container from 'components/Container/Container';
import PanelNavigation from 'components/PanelNavigation/PanelNavigation';
import withUser from 'hoc/withUser';
import fetchTerms from 'api/terms/fetchTerms';
import { GetServerSideProps } from 'next';
import { Term } from 'api/terms/types';
import { useHandle } from 'hooks/useNotification';

const trimRoute = (route: string): string => {
  const splited = route.split('/');
  return splited[splited.length - 1];
};

interface PanelProps {
  data?: Term[];
  error?: 1;
}

const Panel: FC<PanelProps> = ({ data, error }) => {
  const router = useRouter();
  const { handleError } = useHandle();

  useEffect(() => {
    if (error) {
      handleError('Coś poszło nie tak');
    }
  }, [handleError, error]);

  const { asPath: route } = router;
  const getRoute = useCallback(() => trimRoute(route), [route]);

  return (
    <Container>
      <PanelNavigation route={getRoute()} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { type },
  } = context;

  const tokenFromCookies = context.req.cookies.token;
  const fetchedTermResponse = await fetchTerms(type, tokenFromCookies);

  if (fetchedTermResponse.success)
    return {
      props: {
        data: fetchedTermResponse.data,
        error: 0,
      },
    };

  return {
    props: {
      error: 1,
    },
  };
};

export default withUser(Panel);
