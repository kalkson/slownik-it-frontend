import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { FC } from 'react';
import StyledLoginForm from './LoginForm.styled';

const LoginForm: FC = () => (
  <StyledLoginForm className="login">
    <Input type="email" id="email" label="e-mail" />
    <Input type="password" id="password" label="hasło" />
    <Button type="submit">zaloguj</Button>
  </StyledLoginForm>
);

export default LoginForm;
