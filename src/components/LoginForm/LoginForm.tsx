import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { useRouter } from 'next/dist/client/router';
import React, { FC, FormEvent, useState } from 'react';
import StyledLoginForm from './LoginForm.styled';

const { API_URL } = process.env;

const LoginForm: FC = () => {
  const [credentials, setCredentials] = useState({});
  const router = useRouter();

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

    const fetchedData = await fetch(`${API_URL}login_auth`, {
      method: 'post',
      body: JSON.stringify(credentials),
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => {
        console.log(err);
      });

    if (fetchedData?.token) {
      window.localStorage.setItem('token', fetchedData.token);
      router.push('/admin/dashboard');
    }
  };

  return (
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
  );
};

export default LoginForm;
