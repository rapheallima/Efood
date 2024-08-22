import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { cores } from '../../styles';

export type ButtonContainerProps = {
  size?: 'small' | 'big';
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ size }) =>
    size === 'big' ? cores.bege : cores.laranja};
  color: ${({ size }) => (size === 'big' ? cores.laranja : cores.bege)};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: ${({ size }) => (size === 'big' ? 'auto' : '82px')};
  height: 24px;
  line-height: 24.1px;
  border: none;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)<ButtonContainerProps>`
  background-color: ${({ size }) =>
    size === 'big' ? cores.bege : cores.laranja};
  color: ${({ size }) => (size === 'big' ? cores.laranja : cores.bege)};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: ${({ size }) => (size === 'big' ? 'auto' : '82px')};
  height: 24px;
  margin-left: 8px;
  line-height: 24.1px;
  text-decoration: none;
  cursor: pointer;
`;
