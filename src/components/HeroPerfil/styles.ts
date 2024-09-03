import styled from 'styled-components';
import fundo from '../../assets/images/Vector.png';

import { CardProps } from '../Foods/styles';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../styles';

export const Header = styled.div<CardProps>`
  display: flex;
  width: 100%;
  height: ${({ $background }) => ($background === 'white' ? '384px' : '186px')};
  background-image: url(${fundo});
  align-items: center;
  justify-content: center;
`;

export const FundoHero = styled.header<CardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 710px;

  img {
    width: 125px;
    height: 57.5px;
    margin-bottom: 25px;
    position: absolute;
  }
`;

export const StyledLink = styled(Link)`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  text-align: center;
  margin-bottom: 25px;

  @media (max-width: ${breakpoints.desktop}) {
    position: absolute;
    left: 45px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    left: 24px;
  }
`;

export const Car = styled.a`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  text-align: center;
  margin-bottom: 25px;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    position: absolute;
    left: 590px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    left: 290px;
  }
`;
