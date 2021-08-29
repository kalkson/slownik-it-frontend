import styled from 'styled-components';

const StyledPanelNavigation = styled.nav`
  margin-top: 100px;

  .nav {
    &__list {
      display: flex;
      flex-direction: row;
      padding: 0;
      list-style: none;

      & li {
        position: relative;

        &.active {
          z-index: 1;
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 4px;
            background-color: ${({ theme }) => theme.colors.secondary};
            left: 0;
            bottom: 1px;
            z-index: -1;
          }
        }
      }

      & li:not(:first-of-type) {
        margin-left: 20px;
        position: relative;
      }
    }
  }
`;

export default StyledPanelNavigation;
