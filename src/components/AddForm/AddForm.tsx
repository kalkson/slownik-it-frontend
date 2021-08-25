import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { FC, useState } from 'react';
import StyledAddForm from './AddForm.styled';

const AddForm: FC = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledAddForm>
      <h1>Dodaj nowy termin</h1>
      <Input id="term" name="term" type="text" label="Termin" />
      <Input
        id="meaning"
        name="meaning"
        type="text"
        label="Polski odpowiednik (opcjonalne)"
        onChange={(e) => handleChange(e)}
      />
      <Input
        id="description"
        name="description"
        type="textarea"
        label="Opis terminu - max 500 znaków (opcjonalne)"
        onChange={(e) => handleChange(e)}
      />
      <Button type="submit">Prześlij</Button>
    </StyledAddForm>
  );
};

export default AddForm;
