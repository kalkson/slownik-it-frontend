import styled from 'styled-components';

const StyledSnackbarNotificaton = styled.div<{ type: string }>`
  width: 170px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  align-items: center;
  padding: 15px 15px;
  color: #fff;
  margin-top: 6px;
  font-size: 1.6rem;

  ${({ type }): string | null => {
    switch (type) {
      case 'info':
        return `
          background-color: #2196f3;
        `;
      case 'error':
        return `
          background-color: #f44336;
        `;
      case 'warning':
        return `
          background-color: #ff9800;
        `;
      case 'loading':
        return `
          border: solid 1px gray;
        `;
      case 'success':
        return `
          background-color: #4caf50;
        `;
      default:
        return null;
    }
  }};
`;

export default StyledSnackbarNotificaton;
