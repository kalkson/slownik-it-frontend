import styled from 'styled-components';

const StyledTermList = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 100px 0 50px;

  & td,
  & th {
    padding: 10px;
    text-align: left;
    vertical-align: top;
    border: solid 1px rgba(0, 0, 0, 0.1);
  }

  & tr {
    & th:nth-of-type(1),
    & th:nth-of-type(2),
    & th:nth-of-type(4) {
      width: 20%;
    }
    & th:nth-of-type(3) {
      width: 40%;
    }
  }
`;

export default StyledTermList;
