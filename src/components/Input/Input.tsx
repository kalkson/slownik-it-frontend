import React, { FC } from 'react';
import StyledInput from './Input.styled';

interface Props {
  type: 'text' | 'textarea' | 'email' | 'password';
  label: string;
  labelHidden?: boolean;
  placeholder?: string | null;
  id: string;
  name?: string;
  onChange?: (e: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => void | null;
}

const Input: FC<Props> = ({
  type = 'text',
  label,
  labelHidden = false,
  placeholder,
  id,
  onChange,
  name,
  ...props
}) => (
  <StyledInput {...props} className="element">
    <label htmlFor={id} className="element__wrapper">
      {!labelHidden && <span className="element__label">{label}</span>}
      {type !== 'textarea' ? (
        <input
          type={type}
          className="element__input"
          id={id}
          onChange={onChange}
          name={name}
        />
      ) : (
        <textarea
          className="element__textarea"
          id={id}
          onChange={onChange}
          name={name}
        />
      )}
    </label>
  </StyledInput>
);

export default Input;
