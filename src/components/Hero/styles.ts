import styled from 'styled-components';
import fundo from '../../assets/images/Vector.png';
import { cores } from '../../styles';

import { CardProps } from '../Foods/styles';

export const FundoHero = styled.header<CardProps>`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  height: ${({ background }) => (background === 'white' ? '334px' : '186px')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 177px;
  margin-bottom: ${({ background }) =>
    background === 'white' ? '290px' : '0px'};

  a {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    text-align: center;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  top: 87px;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const TextHero = styled.p`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  color: ${cores.laranja};
  padding-top: 170px;
  width: 539px;
  margin: auto;
`;

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`;

export const LinkItem = styled.li`
  margin-left: 357px;
`;

export const LinkCart = styled.a`
  display: flex;
  margin-right: 292px;

  img {
    margin-left: 16px;
    padding-right: 109px;
  }
`;
