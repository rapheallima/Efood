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

export const OverlayConfirm = styled.div`
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
  z-index: 1;

  &.is-open {
    display: flex;
    justify-content: right;
  }

  h2 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    text-align: start;
    line-height: 18.75px;
    color: ${cores.bege};
    padding-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 11px;
    }
  }

  p {
    color: ${cores.bege};
    padding-bottom: 24px;
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

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 11px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 94px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100vh;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;

  div {
    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 84.8%;
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

  @media (max-width: ${breakpoints.tablet}) {
    width: 26%;
  }
`;

export const Row = styled.div`
  display: flex;

  .NameCard {
    @media (max-width: ${breakpoints.tablet}) {
      width: 180px;
    }
  }

  .NumCard {
    width: 228px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 90px;
    }
  }

  .CVV {
    width: 87px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 83px;
    }
  }

  .Month {
    width: 155px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 90px;
      display: block;
    }
  }

  .Year {
    width: 155px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 83px;
      display: block;
    }
  }

  .space {
    padding-right: 34px;

    @media (max-width: ${breakpoints.tablet}) {
      padding-right: 3px;
    }
  }

  .spaceCard {
    padding-right: 30px;
  }

  .Validate {
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

    @media (max-width: ${breakpoints.tablet}) {
      width: 61%;
    }
  }
`;
