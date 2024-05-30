
import { useEffect } from 'react';
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


  const isDarkTheme = useSelector(getIsDarkTheme);
  
  return (

    <div id={'start-page'} className={[isDarkTheme ? 'App _DARK_theme' : 'App']}>

      

        <Routes>

          <Route path='/home/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/story' element={<StoryPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          
          <Route path='/' element={<HomePage />} />



        </Routes>
      


    </div>

  );
}

export default App;
