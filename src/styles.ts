import styled, { createGlobalStyle } from 'styled-components';

export const cores = {
  cinza: '#FFF8F2',
  bege: '#FFEBD9',
  laranja: '#E66767',
  branca: '#fff',
};

export const breakpoints = {
  desktop: '1023px',
  tablet: '767px',
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;

    a {
      color: ${cores.laranja}
    }

    p {
      color: ${cores.laranja}
    }
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    font-style: normal;


    .container {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${cores.cinza};
  border: 2px solid ${cores.bege};
  }
}

`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  background-color: ${cores.cinza};
  border: 2px solid ${cores.bege};
  align-items: center;
`;

export const Lista = styled.div`
  margin: auto;
`;
