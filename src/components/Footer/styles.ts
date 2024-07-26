import styled from 'styled-components';
import { cores } from '../../styles';
import { Props } from '.';

export const Container = styled.footer`
  background-color: ${cores.bege};
  display: block;
  width: 100%;
  height: 298px;
  margin: 0 auto;
  padding: 90px;
  margin-top: 120px;
`;

export const FootImg = styled.img<Props>`
  position: absolute;
  width: 125px;
  height: 57.5px;
  top: ${({ background }) => (background === 'white' ? '1883px' : '1449px')};
  left: 50%;
  margin-top: ${({ background }) => (background === 'white' ? '78px' : '30px')};

  transform: translate(-50%, -50%);
`;

export const Redes = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  margin-top: 40px;
  justify-content: center;

  li {
    padding: 8px;
  }
`;

export const TextFooter = styled.p`
  color: ${cores.laranja};
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  margin-top: 70px;
`;
