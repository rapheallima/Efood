import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Container as AppContainer, GlobalCss, Lista } from './styles';

import Rotas from './routes';
import { store } from './store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <AppContainer>
          <Lista>
            <Rotas />
          </Lista>
        </AppContainer>
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
