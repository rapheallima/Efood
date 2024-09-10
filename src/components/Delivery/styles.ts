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
  background-color: transparent;
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

  h2 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    text-align: start;
    line-height: 18.75px;
    color: ${cores.bege};
    padding-bottom: 16px;
  }

  label {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    text-align: start;
    line-height: 16.41px;
    color: ${cores.bege};
    display: block;
    padding-bottom: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 61%;
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
  margin-bottom: 8px;
`;

export const Row = styled.form`
  display: flex;

  .CepNum {
    width: 155px;
  }

  .space {
    padding-right: 34px;
  }

  .complement {
    padding-bottom: 24px;
  }

  div {
    padding: 8px 0px;
  }

  input {
    width: 344px;
    height: 32px;
    background-color: ${cores.bege};
    border: ${cores.bege};
  }
`;
