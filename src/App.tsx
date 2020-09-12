import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Profile from './pages/Profile'
import Repository from './pages/Repository'
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
