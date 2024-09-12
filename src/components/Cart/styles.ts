import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';

export type ButtonContainerProps = {
  size?: 'small' | 'big';
};

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  cursor: pointer;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 61%;
  }
`;

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  color: ${cores.bege};
  padding-top: 24px;
  padding-bottom: 16px;
`;

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
  width: 100%;
`;

export const ContainerLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${cores.bege};
  width: 344px;
  height: 100px;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 16px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }

  h3 {
    position: absolute;
    color: ${cores.laranja};
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    top: 8px;
  }

  span {
    position: absolute;
    color: ${cores.laranja};
    top: 45px;
  }

  > div > a > .lixeira {
    position: absolute;
    top: 76px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;
