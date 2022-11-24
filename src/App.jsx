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
import ThankYou from './pages/ThankYou';
import Privacy from './pages/Privacy';
import Termsofuse from './pages/Termsofuse';
import Responsibility from './pages/Responsibility';
import Certificate from './pages/Certificate';
import Test from './pages/Test';
import ProgrammingTraining from './pages/ProgrammingTraining';
import FrontendTraining from './pages/FrontendTraining';
import FrontendAds from './pages/FrontendAds';
import ProgrammingAds from './pages/ProgrammingAds';

function App() {
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
        <Route exact path="/Test" element={<Test />} />
        <Route exact path="/Certificate" element={<Certificate />} />
        <Route exact path="/Programming" element={<ProgrammingTraining />} />
        <Route exact path="/ProgrammingTraining" element={<ProgrammingAds />} />
        <Route exact path="/Frontend" element={<FrontendTraining />} />
        <Route exact path="/FrontendTraining" element={<FrontendAds />} />
        <Route exact path="/ThankYou" element={<ThankYou />} />
        <Route exact path="/Privacy" element={<Privacy />} />
        <Route exact path="/Termsofuse" element={<Termsofuse />} />
        <Route exact path="/Responsibility" element={<Responsibility />} />
      </Routes>
      <a href="https://api.whatsapp.com/send?phone=212708983350&text=%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9" className="whatsapp-button z-50" target="_blank" style={{
        position: 'fixed',
        right: '15px',
        bottom: '15px'
      }} 
      onClick="fbq('track', 'Contact')"
      >
        <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png"/>
      </a>
    </>
  );
}

export default App;
