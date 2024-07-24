import { BrowserRouter } from 'react-router-dom';

import { Container as AppContainer, GlobalCss, Lista } from './styles';

import Rotas from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <AppContainer>
        <Lista>
          <Rotas />
        </Lista>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
