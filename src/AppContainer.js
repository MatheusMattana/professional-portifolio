import React from 'react';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';

import './AppContainer.css';

function AppContainer() {
  return (
    <div className="AppContainer">
      <NavBar />
      <MainSection />
    </div>
  );
}

export default AppContainer;
