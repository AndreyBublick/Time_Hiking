
import { useEffect, useState } from 'react';
import './App.scss';

import AOS from "aos";
import "aos/dist/aos.css";

import './fonts/fontello/css/fontello.css';
import { useSelector } from 'react-redux';
import { getIsDarkTheme } from './redux/header-selectors.ts';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { MenuPage } from './pages/MenuPage/MenuPage.jsx';
import { StoryPage } from './pages/StoryPage/StoryPage.jsx';
import { ContactsPage } from './pages/ContactsPage/ContactsPage.jsx';





export const scrollToTop = () => {
  const scrollerElement = document.getElementById('start-page');
  scrollerElement.scrollIntoView({
    behavior: 'smooth',
  });
};

const App = () => {



 



  useEffect(() => {
    AOS.init({
      once: true,
      /*  disable: "phone", */
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  useEffect(() => {

   
  }, []);



  const isDarkTheme = useSelector(getIsDarkTheme);

  return (<div id="smooth-wrapper">

    <div id="smooth-content">


      <div id={'start-page'} className={[isDarkTheme ? 'App _DARK_theme' : 'App']}>



        <div id='scroll-on-PAGE'>




          <Routes>

            <Route id="smooth-content" path='/home/' element={<HomePage />} />
            <Route id="smooth-content" path='/menu' element={<MenuPage />} />
            <Route id="smooth-content" path='/story' element={<StoryPage />} />
            <Route id="smooth-content" path='/contacts' element={<ContactsPage />} />

            <Route path='/' element={<HomePage />} />



          </Routes>

        </div>



      </div>
    </div>
  </div>

  );
}

export default App;
