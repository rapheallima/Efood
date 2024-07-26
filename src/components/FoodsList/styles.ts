import styled from 'styled-components';

import { CardProps } from '../Foods/styles';

export const Container = styled.section<CardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: ${({ background }) => (background === 'white' ? '24px' : '16px')};
  padding-right: 23%;
  padding-left: 23%;
`;

export const List = styled.ul<CardProps>`
  display: grid;
  grid-template-columns: ${({ background }) =>
    background === 'white' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: ${({ background }) => (background === 'white' ? '80px' : '32px')};
`;
