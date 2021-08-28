import { FC } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Loader from './Loader';

const StyledLoaderPopup = styled.div`
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 10px;

  /* animation: LoaderPopup 600ms linear 100ms forwards;

  @keyframes LaoderPopup {
    0% {
      transform: translateY(120%);
    }
    100% {
      transform: translateY(0);
    }
  } */
`;

interface Props {
  isVisible: boolean;
}

const LoaderPopup: FC<Props> = ({ isVisible }) => (
  <CSSTransition in={isVisible} timeout={600} className="loader">
    <StyledLoaderPopup role="alert">
      <Loader /> Ładowanie
    </StyledLoaderPopup>
  </CSSTransition>
);

export default LoaderPopup;
