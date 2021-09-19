import React, { forwardRef } from 'react';
import StyledInput from './Input.styled';

interface Props {
  type?: 'text' | 'textarea' | 'email' | 'password';
  label: string;
  labelHidden?: boolean;
  placeholder?: string | null;
  id: string;
  name?: string;
  required?: boolean;
  initialValue?: string;
  onChange?: (e: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => void | null;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = 'text',
      label,
      labelHidden = false,
      placeholder,
      id,
      onChange,
      name,
      initialValue,
      ...props
    },
    ref
  ) => (
    <StyledInput className="element" ref={ref}>
      <label htmlFor={id} className="element__wrapper">
        {!labelHidden && <span className="element__label">{label}</span>}
        {type !== 'textarea' ? (
          <input
            type={type}
            className="element__input"
            id={id}
            onChange={onChange}
            name={name}
            {...props}
            defaultValue={initialValue}
          />
        ) : (
          <textarea
            className="element__textarea"
            id={id}
            onChange={onChange}
            name={name}
            defaultValue={initialValue}
          />
        )}
      </label>
    </StyledInput>
  )
);

Input.displayName = 'Input';

export default Input;
