import { FC } from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  height: 25px;
  width: 25px;

  transform: translate(-8px, -8px);

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    height: 25px;
    width: 25px;
    margin: 8px;
    border: 4px solid black;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: black transparent transparent transparent;
    transform-origin: center;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader: FC = () => (
  <StyledLoader>
    <div />
    <div />
    <div />
    <div />
  </StyledLoader>
);

export default Loader;
