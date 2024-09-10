import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Container as AppContainer, GlobalCss, Lista } from './styles';

import Rotas from './routes';
import { store } from './store';
import Cart from './components/Cart';
import Delivery from './components/Delivery';
import Payment from './components/Payment';

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
        <Delivery />
        <Payment />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
