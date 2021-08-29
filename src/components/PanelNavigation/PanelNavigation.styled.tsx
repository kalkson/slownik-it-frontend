import styled from 'styled-components';

const StyledPanelNavigation = styled.nav`
  margin-top: 100px;

  .nav {
    &__list {
      display: flex;
      flex-direction: row;
      padding: 0;
      list-style: none;

      & li:not(:first-of-type) {
        margin-left: 20px;
      }
    }
  }
`;

export default StyledPanelNavigation;
