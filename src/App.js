
import { useEffect, useRef, useState } from 'react';
import './App.scss';

import "aos/dist/aos.css";
import { Lenis, ReactLenis, useLenis } from 'lenis/react';

import './fonts/fontello/css/fontello.css';
import { useSelector } from 'react-redux';
import { getIsDarkTheme } from './redux/header-selectors.ts';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { MenuPage } from './pages/MenuPage/MenuPage.tsx';
import { StoryPage } from './pages/StoryPage/StoryPage.tsx';
import { ContactsPage } from './pages/ContactsPage/ContactsPage.tsx';

import HeaderContainer from './components/Header/HeaderContainer.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import Aos from 'aos';
import { getisNotCloseBody } from './redux/Conditions-selectors.ts';



export const scrollToTop = () => {
  const scrollerElement = document.getElementById('start-page');


  scrollerElement.scrollIntoView({
    behavior: 'smooth',
  });



};

const App = () => {
  const lenisRef = useRef();
  const isDarkTheme = useSelector(getIsDarkTheme);/// thema
/*   const body = useRef(document.querySelector('body')).current;
 */  const isNotCloseBody = useSelector(getisNotCloseBody);
  const [widthScrollBar,setWidthScrollBar] = useState(0);

  useEffect (()=>{
    Aos.refresh();
},[isDarkTheme]);




   useEffect(() => {
    function update(time) {
      isNotCloseBody ? lenisRef.current?.lenis?.start():lenisRef.current?.lenis?.stop();  

    }
    



    update();
    
}, [isNotCloseBody]);





  useEffect(() => {
    Aos.init({
      once: true,
      /*  disable: "phone", */
      duration: 700,
      /* easing: "ease-out-cubic", */
    });
  }, []);



  useEffect(() => {
   
   

   let width = window.innerWidth - document.documentElement.clientWidth;
  
   if(width>0){
    setWidthScrollBar(width);
   }
   
}, [isNotCloseBody]);
  







  return (




    <div id={'start-page'} style={!isNotCloseBody ? {paddingRight:`${widthScrollBar}px`}:{paddingRight:`${0}px`}} className={[isDarkTheme ? 'App _DARK_theme' : 'App']}>
      <HeaderContainer widthScrollBar={widthScrollBar} />





      <main>
        {/* ...your app */}

    {/*     <ReactLenis root ref={lenisRef}   > */}

          <Routes>

            <Route id="smooth-content" path='/Time_Hiking' element={<HomePage />} />
            <Route id="smooth-content" path='/home' element={<HomePage />} />
            <Route id="smooth-content" path='/menu' element={<MenuPage />} />
            <Route id="smooth-content" path='/story' element={<StoryPage />} />
            <Route id="smooth-content" path='/contacts' element={<ContactsPage />} />

            <Route path='/' element={<HomePage />} />



          </Routes>
       {/*  </ReactLenis> */}
      </main>


      <Footer />

    </div>




  );
}

export default App;
