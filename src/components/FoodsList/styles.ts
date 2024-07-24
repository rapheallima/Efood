import styled from 'styled-components';

import { CardProps } from '../Foods/styles';

export const Container = styled.section`
  max-width: 1366px;
  max-height: 2148px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const List = styled.ul<CardProps>`
  display: grid;
  grid-template-columns: ${({ background }) =>
    background === 'white' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: 50px;
  margin-bottom: 80px;
`;
