import styled from 'styled-components';

const StyledSearchBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  max-width: 600px;
  width: 100%;

  transition: max-width 200ms ease-in-out;

  &.transformed {
    max-width: 400px;
  }

  .search {
    &__input {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      border: solid 1px #707070;
      padding-right: 62px;
      padding-left: 30px;
      font-size: 2rem;
      border-radius: 32px;

      transition: height 200ms ease-in-out;

      &.transformed {
        height: 52px;
      }

      &:focus {
        outline: none;
      }
    }

    &__icon {
      position: absolute;
      width: 22px;
      height: 22px;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      z-index: 2;
    }

    &__label {
      display: none;
    }
  }
`;

export default StyledSearchBox;
