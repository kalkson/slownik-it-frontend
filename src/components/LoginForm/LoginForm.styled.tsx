import styled from 'styled-components';

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0;
  width: fit-content;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default StyledLoginForm;
