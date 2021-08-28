import login from 'api/auth/login';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Input from 'components/Input/Input';
import { useHandle } from 'hooks/useNotification';
import { useRouter } from 'next/dist/client/router';
import React, { FC, FormEvent, useState } from 'react';
import StyledLoginForm from './LoginForm.styled';

const LoginForm: FC = () => {
  const [credentials, setCredentials] = useState({});
  const router = useRouter();
  const { handleSuccess, handleError } = useHandle();

  const handleChange = (e: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await login(credentials);

    if (result.success) {
      handleSuccess('Zalogowano');
      router.push('/admin/dashboard');
      return;
    }

    handleError(result.message);
  };

  return (
    <Container>
      <StyledLoginForm className="login" onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="email"
          id="email"
          label="e-mail"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <Input
          type="password"
          id="password"
          label="hasło"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit">zaloguj</Button>
      </StyledLoginForm>
    </Container>
  );
};

export default LoginForm;
