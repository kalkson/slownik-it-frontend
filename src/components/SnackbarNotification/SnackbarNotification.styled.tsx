import styled from 'styled-components';

const StyledSnackbarNotificaton = styled.div<{ type: string }>`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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
