import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 2.8rem;
  position: relative;
  width: fit-content;
  z-index: 1;

  &:disabled {
    cursor: not-allowed;
  }

  & span {
    z-index: 1;
    position: relative;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 6px;
    top: calc(100% - 6px);
    left: 0;
    z-index: 0;

    transition: transform 250ms ease-in-out;
    transform-origin: left;
  }

  &:hover {
    &:after {
      transform-origin: right;
      transform: scaleX(0);
    }
  }
`;

interface Props {
  type: 'submit' | 'button';
  disabled?: boolean;
}

// type ButtonType = 'submit' | 'button';

const Button: FC<Props> = ({
  type = 'button',
  children,
  disabled,
  ...props
}) => (
  <StyledButton type={type} disabled={disabled} {...props}>
    <span>{children}</span>
  </StyledButton>
);

export default Button;
