import styled from 'styled-components'

const StyledHeader = styled.header`
  padding-top: 4.5rem;
  position: relative;
  height: 310px;

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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      margin: 0 auto;
    }
  }
`

export default StyledHeader
