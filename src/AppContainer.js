import React, { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import WhatIDo from './components/WhatIDo';
import AboutMe from './components/AboutMe';
import MyPortifolio from './components/MyPortifolio';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

import LanguageProvider from './context/Language';

import './AppContainer.css';
import './CSS/mainStyles.css';

function AppContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', function (event) {
      setIsLoading(false);
    });
  }, []);

  return (
    <LanguageProvider>
      <div className="AppContainer">
        {isLoading && <LoadingScreen />}
        <NavBar />
        <MainSection />
        <WhatIDo />
        <MyPortifolio />
        <AboutMe />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default AppContainer;
