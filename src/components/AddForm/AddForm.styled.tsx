import styled from 'styled-components';

const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 80px auto 80px;
  width: fit-content;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default StyledAddForm;
