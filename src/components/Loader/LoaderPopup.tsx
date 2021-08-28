import { FC } from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const StyledLoaderPopup = styled.div`
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LoaderPopup: FC = () => (
  <StyledLoaderPopup role="alert">
    <Loader /> Ładowanie
  </StyledLoaderPopup>
);

export default LoaderPopup;
