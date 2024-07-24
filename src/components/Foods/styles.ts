import styled from 'styled-components';
import { cores } from '../../styles';

export type CardProps = {
  background: 'white' | 'orange';
};

export const Card = styled.div<CardProps>`
  background-color: ${({ background }) =>
    background === 'white' ? cores.branca : cores.laranja};
  width: ${({ background }) => (background === 'white' ? '520px' : '320px')};
  height: ${({ background }) => (background === 'white' ? '390px' : '338px')};
  border: ${({ background }) =>
    background === 'white'
      ? `1px solid ${cores.laranja}`
      : `8px solid ${cores.laranja}`};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  padding-bottom: 329px;
`;

export const Title = styled.h3<CardProps>`
  color: ${({ background }) =>
    background === 'white' ? cores.laranja : cores.bege};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: left;
`;

export const Nota = styled.div`
  display: flex;
  align-items: center;
`;

export const NotaText = styled.span<CardProps>`
  color: ${({ background }) =>
    background === 'white' ? cores.laranja : cores.bege};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
`;

export const EstrelaIcon = styled.img`
  margin-right: 5px;
  margin-left: 8px;
`;

export const Descript = styled.p<CardProps>`
  color: ${({ background }) =>
    background === 'white' ? cores.laranja : cores.bege};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  padding: 0 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
  margin-top: 6px;
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
`;
