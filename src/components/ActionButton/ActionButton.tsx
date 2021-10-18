import { FC } from 'react';
import { ActionButtonVariant } from 'types';
import StyledActionButton from './ActionButton.styled';

interface ActionButtonProps {
  variant: ActionButtonVariant;
  onClick?: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({
  variant = ActionButtonVariant.blue,
  onClick,
  children,
}) => (
  <StyledActionButton onClick={onClick} type="button" variant={variant}>
    {children}
  </StyledActionButton>
);

export default ActionButton;
