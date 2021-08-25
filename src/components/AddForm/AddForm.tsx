import Input from 'components/Input/Input';
import { FC } from 'react';
import StyledAddForm from './AddForm.styled';

const AddForm: FC = () => (
  <StyledAddForm>
    <h1>Dodaj nowy termin</h1>
    <Input id="definition" name="definition" type="text" label="Termin" />
    <Input
      id="meaning"
      name="meaning"
      type="text"
      label="Polski odpowiednik (opcjonalne)"
    />
    <Input
      id="description"
      name="description"
      type="textarea"
      label="Opis terminu - max 500 znaków (opcjonalne)"
    />
  </StyledAddForm>
);

export default AddForm;
