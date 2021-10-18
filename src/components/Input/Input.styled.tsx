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
      display: block;
    }

    &__input {
      height: 46px;
      padding: 5px 10px;
    }

    &__textarea {
      height: 150px;
      padding: 5px 10px;
      padding-top: 15px;
      resize: none;
    }

    &__input,
    &__textarea {
      width: 100%;
      border-radius: 10px;
      border: none;
      outline: none;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 5px;

      &:focus {
        outline: none;
      }
    }
  }
`;

export default StyledInput;
