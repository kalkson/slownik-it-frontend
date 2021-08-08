import React, { FC } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  min-width: 290px;
  max-width: 350px;
  position: relative;
  display: flex;
  flex-direction: column;

  .element {
    &__label {
      font-size: 2rem;
      margin-bottom: 6px;
      text-align: center;
      display: block;
    }

    &__input {
      height: 46px;
    }

    &__textarea {
      height: 150px;
    }

    &__input,
    &__textarea {
      width: 100%;
      border-radius: 24px;
      border: none;
      outline: none;
      padding: 5px 20px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      &:focus {
        outline: none;
      }
    }
  }
`;

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
          className="element__label"
          id={id}
          onChange={onChange}
          name={name}
        />
      )}
    </label>
  </StyledInput>
);

export default Input;
