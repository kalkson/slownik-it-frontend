import { TermRowType } from 'api/terms/types';
import TermRow from 'components/TermRow/TermRow';
import trimRoute from 'helpers/trimRoute';
import { useRouter } from 'next/dist/client/router';
// import Link from 'next/link';
import React, { FC, useCallback } from 'react';
import StyledTermList from './TermList.styled';

interface TermsListProps {
  terms?: TermRowType[];
}

const TermsList: FC<TermsListProps> = ({ terms = [] }) => {
  const router = useRouter();

  const { asPath: route } = router;
  const getRoute = useCallback(() => trimRoute(route), [route]);
  console.log(getRoute());

  return (
    <StyledTermList>
      <tr>
        <th>Termin</th>
        <th>Polski odpowiednik</th>
        <th>Znaczenie</th>
        <th>Akcje</th>
      </tr>
      <tbody>
        {terms.length &&
          // eslint-disable-next-line no-underscore-dangle
          terms.map((term) => <TermRow key={term._id} termRow={term} />)}
      </tbody>
    </StyledTermList>
  );
};

export default TermsList;
