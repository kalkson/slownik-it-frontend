import { Term } from 'api/terms/types';
import ActionButton from 'components/ActionButton/ActionButton';
import { ActionButtonVariant } from 'components/ActionButton/ActionButton.styled';
import Input from 'components/Input/Input';
import { FC } from 'react';
import StyledTermRow from './TermRow.styled';

interface TermRowProps {
  termRow: Term;
  key: string;
}

const TermRow: FC<TermRowProps> = ({ termRow, ...props }) => {
  const { term, meaning, description } = termRow;

  return (
    <StyledTermRow {...props}>
      <td>
        <Input
          id="term"
          name="term"
          labelHidden
          label="Opis terminu - max 500 znaków (opcjonalne)"
          initialValue={term || ''}
        />
      </td>
      <td>
        <Input
          id="meaning"
          name="meaning"
          labelHidden
          label="Opis terminu - max 500 znaków (opcjonalne)"
          initialValue={meaning || ''}
        />
      </td>
      <td>
        <Input
          id="description"
          name="description"
          labelHidden
          type="textarea"
          label="Opis terminu - max 500 znaków (opcjonalne)"
          initialValue={description || ''}

          // onChange={(e) => handleChange(e)}
        />
      </td>
      <td>
        <div className="row__action-group">
          <ActionButton variant={ActionButtonVariant.submit}>
            Zaakceptuj
          </ActionButton>
          <ActionButton variant={ActionButtonVariant.reject}>
            Odrzuc
          </ActionButton>
        </div>
      </td>
    </StyledTermRow>
  );
};

export default TermRow;
