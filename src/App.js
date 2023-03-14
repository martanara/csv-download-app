import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from '../src/components/Container/Container';
import Home from '../src/components/Home/Home';
import NotFound from '../src/components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

const App = () => (
  <BrowserRouter>
    <Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
