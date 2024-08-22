import styled from 'styled-components';
import { cores } from '../../styles';

export type CardProps = {
  $background: 'white' | 'orange';
};

export const Card = styled.div<CardProps>`
  background-color: ${({ $background }) =>
    $background === 'white' ? cores.branca : cores.laranja};
  width: ${({ $background }) => ($background === 'white' ? '472px' : '320px')};
  height: ${({ $background }) => ($background === 'white' ? '400px' : '338px')};
  border: ${({ $background }) =>
    $background === 'white'
      ? `1px solid ${cores.laranja}`
      : `8px solid ${cores.laranja}`};
  margin: auto;
  display: flex;
  flex-direction: column;

  position: relative;

  > img {
    width: 100%;
    height: ${({ $background }) =>
      $background === 'white' ? '217px' : '167px'};
  }
`;

export const Title = styled.h3<CardProps>`
  color: ${({ $background }) =>
    $background === 'white' ? cores.laranja : cores.bege};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: left;
`;

export const Nota = styled.div<CardProps>`
  display: ${({ $background }) => ($background === 'white' ? 'flex' : 'none')};
`;

export const NotaText = styled.span<CardProps>`
  color: ${({ $background }) =>
    $background === 'white' ? cores.laranja : cores.bege};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
`;

export const EstrelaIcon = styled.img`
  margin-right: 5px;
  margin-left: 8px;
`;

export const Descript = styled.p<CardProps>`
  display: flex;
  color: ${({ $background }) =>
    $background === 'white' ? cores.laranja : cores.bege};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  padding: ${({ $background }) => ($background === 'white' ? '16px 8px' : '')};
  padding-bottom: ${({ $background }) =>
    $background === 'white' ? '' : '8px'};
`;

export const Info = styled.div<CardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ $background }) => ($background === 'white' ? '8px' : '')};
  padding-left: ${({ $background }) => ($background === 'white' ? '8px' : '')};
  padding-bottom: ${({ $background }) =>
    $background === 'white' ? '' : '8px'};
  margin-top: ${({ $background }) => ($background === 'white' ? '' : '8px')};
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
`;
