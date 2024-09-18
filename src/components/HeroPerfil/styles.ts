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
  gap: 246px;

  img {
    width: 125px;
    height: 57.5px;
    margin-bottom: 18px;
    margin-left: 98px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    gap: 122px;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0px;
    }
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
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
    justify-content: space-between;
    left: 220px;
    font-size: 16px;

    span {
      display: none;
    }
  }
`;
