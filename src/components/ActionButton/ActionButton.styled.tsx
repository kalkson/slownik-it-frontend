import styled, { css } from 'styled-components';

export enum ActionButtonVariant {
  submit = 'submit',
  click = 'click',
  reject = 'reject',
}

const StyledActionButton = styled.button<{ variant: ActionButtonVariant }>`
  border-radius: 6px;
  color: white;
  font-size: 1.6rem;
  padding: 7px 20px;
  text-align: center;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  ${({ variant }) => {
    if (variant === ActionButtonVariant.click) {
      return css`
        background-color: #2196f3;
      `;
    }

    if (variant === ActionButtonVariant.reject) {
      return css`
        background-color: #f44336;
      `;
    }

    return css`
      background-color: #4caf50;
    `;
  }};
`;

export default StyledActionButton;
