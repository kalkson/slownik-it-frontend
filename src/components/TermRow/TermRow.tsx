import { Term } from 'api/terms/types';
import { FC } from 'react';
import StyledTermRow from './TermRow.styled';

interface TermRowProps {
  termRow: Term;
  key: string;
}

const TermRow: FC<TermRowProps> = ({ termRow, ...props }) => (
  <StyledTermRow {...props}>
    <td>{termRow.term}</td>
  </StyledTermRow>
);

export default TermRow;
