import styled from 'styled-components';

import { CardProps } from '../Foods/styles';

export const Container = styled.section<CardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: ${({ background }) => (background === 'white' ? '24px' : '16px')};
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul<CardProps>`
  display: flex;
  column-gap: ${({ background }) => (background === 'white' ? '80px' : '32px')};
`;
