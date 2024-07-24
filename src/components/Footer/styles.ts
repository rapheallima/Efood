import styled from 'styled-components';
import { cores } from '../../styles';
import { Props } from '.';

export const Container = styled.footer`
  background-color: ${cores.bege};
  display: block;
  max-width: 1366px;
  max-height: 298px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 90px;
`;

export const FootImg = styled.img<Props>`
  position: absolute;
  width: 125px;
  height: 57.5px;
  top: ${({ background }) => (background === 'white' ? '1907px' : '1468px')};
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const Redes = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  margin-top: 20px;
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
  padding: 80px 10px;
`;
