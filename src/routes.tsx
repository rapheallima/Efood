import { Routes, Route } from 'react-router-dom';

import Hero from './components/HeroHome';
import HeroP from './components/HeroPerfil';

import Home from './components/pages/Home';
import Perfil from './components/pages/Perfil';
import Banner from './components/Banner';
import Footer from './components/Footer';

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Hero background="white" /> <Home /> <Footer background="white" />
        </>
      }
    />
    <Route
      path="/perfil"
      element={
        <>
          <HeroP background="orange" />
          <Banner /> <Perfil />
          <Footer background="orange" />
        </>
      }
    />
  </Routes>
);

export default Rotas;
