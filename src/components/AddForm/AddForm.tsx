import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { FC, FormEvent, useState, useRef } from 'react';
import { addTerm } from 'api/terms';
import { useHandle } from 'hooks/useNotification';
import ReCAPTCHA from 'react-google-recaptcha';
import bounce from 'utils/bounce';
import useLoading from 'hooks/useLoading';
import StyledAddForm from './AddForm.styled';

type FormData = {
  term?: string;
  meaning?: string;
  description?: string;
  token?: string;
};

const AddForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({});
  const { handleError, handleSuccess } = useHandle();
  const [isLoading, setLoading] = useLoading();

  const form$ = useRef<HTMLFormElement>(null);
  const termInput$ = useRef<HTMLInputElement>(null);
  const captcha$ = useRef<ReCAPTCHA>(null);

  const handleChange = (e: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const token = captcha$.current ? captcha$.current.getValue() : null;
    if (isLoading) return;
    let invalidForm = false;

    if (!formData.term) {
      invalidForm = true;
      bounce(termInput$);
    }

    if (!token) {
      invalidForm = true;
      bounce(captcha$);
    }

    if (invalidForm) return;

    setLoading(true);
    const result = !isLoading && (await addTerm({ ...formData, token }, 'add'));

    if (result.success) {
      handleSuccess(result.message);

      setFormData({});
      if (form$.current) form$.current.reset();
      if (captcha$.current) captcha$.current.reset();
      setLoading(false);
      return;
    }

    handleError(result.message);
    setLoading(false);
  };

  return (
    <StyledAddForm onSubmit={(e) => handleSubmit(e)} ref={form$}>
      <h1>Dodaj nowy termin</h1>
      <Input
        id="term"
        name="term"
        type="text"
        label="Termin"
        onChange={(e) => handleChange(e)}
        ref={termInput$}
      />
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
      <ReCAPTCHA
        ref={captcha$}
        sitekey="6LcNRSscAAAAAKNp-3ZX8nVps8Eb_-xNL3xf2Tsd"
        hl="pl"
      />
      <Button type="submit" disabled={isLoading}>
        Prześlij
      </Button>
    </StyledAddForm>
  );
};

export default AddForm;
