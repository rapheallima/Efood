import styled from 'styled-components';
import { cores } from '../../styles';

export const Container = styled.footer`
  background-color: ${cores.bege};
  display: flex;
  width: 100%;
  height: 298px;
  padding: 90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  img {
    width: 125px;
    height: 57.5px;
  }
`;

export const Redes = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 32.5px 0px 80px 0px;

  li {
    padding: 8px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const TextFooter = styled.p`
  color: ${cores.laranja};
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
`;
