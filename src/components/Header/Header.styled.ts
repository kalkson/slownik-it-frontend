import styled from 'styled-components';

const StyledHeader = styled.header`
  padding-top: 4.5rem;
  position: relative;
  height: 130px;
  transition: height 200ms ease-in-out;

  @media ${({ theme }) => theme.media.mobileXL} {
    height: 310px;
  }

  &.transformed {
    height: 130px;
  }

  .header {
    &__nav-container {
      display: flex;
    }

    &__nav {
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    &__nav-item {
      font-weight: 500;

      &:not(:first-child) {
        margin-left: 3rem;
      }
    }

    &__logo {
      display: none;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      margin: 0 auto;
      max-width: 400px;
      width: 90%;

      @media ${({ theme }) => theme.media.mobileXL} {
        top: 50%;
        display: block;
      }

      transition: all 200ms ease-in-out;

      &.transformed {
        top: 100px;
        transform: translate(-50%, 0);
        left: 50%;
        width: 189px;

        @media ${({ theme }) => theme.media.mobileXL} {
          transform: translate(0, 0);
          left: 0;
          top: 45px;
        }
      }
    }
  }
`;

export default StyledHeader;
