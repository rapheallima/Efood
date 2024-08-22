import styled from 'styled-components';
import fundo from '../../assets/images/Vector.png';
import { cores } from '../../styles';

import { CardProps } from '../Foods/styles';

export const Header = styled.div<CardProps>`
  display: flex;
  width: 100%;
  height: ${({ $background }) => ($background === 'white' ? '384px' : '186px')};
  background-image: url(${fundo});
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

export const FundoHero = styled.header<CardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 138.5px;

  a {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    text-align: center;
  }

  img {
    width: 125px;
    height: 57.5px;
  }
`;

export const TextHero = styled.h1`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  color: ${cores.laranja};
  width: 539px;
`;

export const Links = styled.div`
  display: block;
  border: 2px solid red;
  align-items: center;
  justify-content: center;
`;
