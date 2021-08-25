import styled from 'styled-components';

const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0;
  width: fit-content;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default StyledAddForm;
