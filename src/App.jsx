import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import ThankYou from './pages/ThankYou';
import Privacy from './pages/Privacy';
import Termsofuse from './pages/Termsofuse';
import Responsibilaty from './pages/Responsibilaty';

function App() {
  const { enableLinkTracking } = useMatomo()

  enableLinkTracking()


  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  },[]);
  useEffect(() => {
    AOS.refresh()
  })

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/thanks" element={<ThankYou />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/termsofuse" element={<Termsofuse />} />
        <Route exact path="/responsibilaty" element={<Responsibilaty />} />
      </Routes>
      <a href="https://api.whatsapp.com/send?phone=212708983350&text=Salam" className="whatsapp-button" target="_blank" style={{
        position: 'fixed',
        right: '15px',
        bottom: '15px'
      }}>
        <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png"/>
      </a>
    </>
  );
}

export default App;
