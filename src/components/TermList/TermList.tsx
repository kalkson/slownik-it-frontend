import HandledResponse, { TermRowType, TermType } from 'types';
import TermRow from 'components/TermRow/TermRow';
import React, { FC, useEffect, useMemo, useState } from 'react';
import useLoading from 'hooks/useLoading';
import { useHandle } from 'hooks/useNotification';
import StyledTermList from './TermList.styled';

interface TermsListProps {
  terms?: TermRowType[];
  route: string;
}

const TermsList: FC<TermsListProps> = ({ terms = [], route }) => {
  const termType = useMemo(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(TermType)) {
      if (key === route) return value;
    }

    return undefined;
  }, [route]);

  const [movedTerms, setMovedTerms] = useState<string[]>([]);
  const [, setLoading] = useLoading();
  const { handleError, handleSuccess } = useHandle();

  useEffect(() => {
    setMovedTerms([]);
  }, [route]);

  const handleRequest = async (
    callback: () => Promise<HandledResponse>,
    id: string
  ) => {
    setLoading(true);
    const result = await callback();

    setLoading(false);

    const { success, message } = result;

    if (success) {
      setMovedTerms([...movedTerms, id]);
      handleSuccess(message);
      return;
    }

    handleError(message);
  };

  return (
    <StyledTermList>
      <tbody>
        <tr>
          <th>Termin</th>
          <th>Polski odpowiednik</th>
          <th>Znaczenie</th>
          <th>Akcje</th>
        </tr>
        {terms.length
          ? terms.map((term) => {
              const { _id: id } = term;

              if (!movedTerms.includes(id))
                return (
                  <TermRow
                    key={id}
                    id={id}
                    termRow={term}
                    termType={termType}
                    handleRequest={handleRequest}
                  />
                );

              return null;
            })
          : null}
      </tbody>
    </StyledTermList>
  );
};

export default TermsList;
