import { Routes, Route } from 'react-router-dom';

import Hero from './components/HeroHome';
import HeroP from './components/HeroPerfil';

import Home from './components/pages/Home';
import Perfil from './components/pages/Perfil';
import Footer from './components/Footer';

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Hero background="white" />
          <Home />
          <Footer background="white" />
        </>
      }
    />
    <Route
      path="/perfil/:id"
      element={
        <>
          <HeroP background="orange" />
          <Perfil />
          <Footer background="orange" />
        </>
      }
    />
    <Route
      path="/checkout"
      element={
        <>
          <HeroP background="orange" />
          <Perfil />
          <Footer background="orange" />
        </>
      }
    />
  </Routes>
);

export default Rotas;
