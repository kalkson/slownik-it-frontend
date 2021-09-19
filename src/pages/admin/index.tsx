import LoginForm from 'components/LoginForm/LoginForm';
import { FC } from 'react';
import withUser from 'hoc/withUser';

const Admin: FC = () => <LoginForm />;

export default withUser(Admin);
