import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  margin-bottom: 53px;
`;

export const ContainerPerfil = styled.div`
  width: 1030px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 88%;
  }
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  color: ${cores.branca};
  width: 676px;
`;

export const SubTitle = styled.p`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  color: ${cores.branca};
  opacity: 64%;
  padding-bottom: 156.5px;
`;

export default Image;
