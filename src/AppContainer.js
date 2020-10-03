import React from 'react';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';

import LanguageProvider from './context/Language';

import './AppContainer.css';

function AppContainer() {
  return (
    <LanguageProvider>
      <div className="AppContainer">
        <NavBar />
        <MainSection />
      </div>
    </LanguageProvider>
  );
}

export default AppContainer;
