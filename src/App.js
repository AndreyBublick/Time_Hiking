
import { useEffect, useRef, useState } from 'react';
import './App.scss';

import "aos/dist/aos.css";
import { ReactLenis, useLenis } from 'lenis/react';

import './fonts/fontello/css/fontello.css';
import { useSelector } from 'react-redux';
import { getIsDarkTheme } from './redux/header-selectors.ts';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { MenuPage } from './pages/MenuPage/MenuPage.jsx';
import { StoryPage } from './pages/StoryPage/StoryPage.jsx';
import { ContactsPage } from './pages/ContactsPage/ContactsPage.jsx';

import HeaderContainer from './components/Header/HeaderContainer.tsx';
import { Footer } from './components/Footer/Footer.jsx';
import Aos from 'aos';


export const scrollToTop = () => {
  const scrollerElement = document.getElementById('start-page');
  scrollerElement.scrollIntoView({
    behavior: 'smooth',
  });
};

const App = () => {


  const containerRef = useRef(null);



  useEffect(() => {
    Aos.init({
      once: true,
      /*  disable: "phone", */
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);




  const isDarkTheme = useSelector(getIsDarkTheme);

  return (



<ReactLenis root>
    <div id={'start-page'} className={[isDarkTheme ? 'App _DARK_theme' : 'App']}>
      <HeaderContainer />
      
        



        <main>
          {/* ...your app */}



          <Routes>
          
            <Route id="smooth-content" path='/Time_Hiking' element={<HomePage />} />
            <Route id="smooth-content" path='/home' element={<HomePage />} />
            <Route id="smooth-content" path='/menu' element={<MenuPage />} />
            <Route id="smooth-content" path='/story' element={<StoryPage />} />
            <Route id="smooth-content" path='/contacts' element={<ContactsPage />} />

            <Route path='/' element={<HomePage />} />



          </Routes>

        </main>


        <Footer />
     
    </div>


    </ReactLenis>

  );
}

export default App;
