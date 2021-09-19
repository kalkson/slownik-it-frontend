import { FC } from 'react';
import StyledActionButton, { ActionButtonVariant } from './ActionButton.styled';

interface ActionButtonProps {
  variant: ActionButtonVariant;
  onClick?: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({
  variant = ActionButtonVariant.click,
  onClick,
  children,
}) => (
  <StyledActionButton onClick={onClick} type="button" variant={variant}>
    {children}
  </StyledActionButton>
);

export default ActionButton;
