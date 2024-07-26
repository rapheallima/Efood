import styled from 'styled-components';
import { cores } from '../../styles';

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 250px;
  padding-left: 23%;
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
  padding-top: 29px;
  padding-bottom: 149px;
`;

export default Image;
