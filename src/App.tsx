
import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Profile from './pages/Profile'
import Repository from './pages/Repository'
import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repository />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
