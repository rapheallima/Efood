import styled from 'styled-components';

import { CardProps } from '../Foods/styles';
import { breakpoints } from '../../styles';

export const Container = styled.section<CardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: ${({ $background }) => ($background === 'white' ? '24px' : '16px')};
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul<CardProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ $background }) => ($background === 'white' ? '48px 80px' : '16px')};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;
