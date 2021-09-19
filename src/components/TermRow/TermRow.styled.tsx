import styled from 'styled-components';

const StyledTermRow = styled.tr`
  & textarea {
    height: 0 !important;
    min-height: 80px;
    resize: vertical !important;
    width: auto;
  }
`;

export default StyledTermRow;
