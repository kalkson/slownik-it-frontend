import HandledResponse, { Term, TermType } from 'types';
import ActionButton from 'components/ActionButton/ActionButton';
import Input from 'components/Input/Input';
import { FC, useState } from 'react';
import getTermActions from 'helpers/getTermActions';
import StyledTermRow from './TermRow.styled';

interface TermRowProps {
  termRow: Term;
  termType: string | undefined;
  id: string;
  handleRequest: (
    callback: () => Promise<HandledResponse>,
    id: string
  ) => Promise<void>;
}

const TermRow: FC<TermRowProps> = ({
  termRow,
  termType,
  handleRequest,
  id,
  ...props
}) => {
  const { term, meaning, description } = termRow;

  const [termData, setTermData] = useState<Term>({
    term,
    meaning,
    description,
  });

  const handleChange = (e: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }): void => {
    setTermData({
      ...termData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledTermRow {...props}>
      <td>
        <Input
          id="term"
          name="term"
          labelHidden
          label=""
          initialValue={term || ''}
          onChange={handleChange}
        />
      </td>
      <td>
        <Input
          id="meaning"
          name="meaning"
          labelHidden
          label=""
          initialValue={meaning || ''}
          onChange={handleChange}
        />
      </td>
      <td>
        <Input
          id="description"
          name="description"
          labelHidden
          type="textarea"
          label=""
          initialValue={description || ''}
          onChange={handleChange}
        />
      </td>
      <td>
        <div className="row__action-group">
          {getTermActions(termType as TermType).map(
            ({ variant, onClick, content }) => (
              <ActionButton
                key={variant}
                variant={variant}
                onClick={() => handleRequest(() => onClick(termData), id)}
              >
                {content}
              </ActionButton>
            )
          )}
        </div>
      </td>
    </StyledTermRow>
  );
};

export default TermRow;
