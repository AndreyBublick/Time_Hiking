
import { useEffect } from 'react';
import './App.scss';
import Features from './components/Features/Features.jsx';
import HeaderContainer from './components/Header/HeaderContainer.tsx';
import ITSTimeForHiking from './components/ITSTimeForHiking/ITSTimeForHiking.tsx';
import { TitleBlock } from './components/TitleBlock/TitleBlock.tsx';
import { TwoPartBlocks } from './components/TwoPartBlocks/TwoPartBlocks.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { TitleMountains } from './components/TitleMountains/TitleMountains.jsx';
import { BrieflyAboutTheMainThing } from './components/BrieflyAboutTheMainThing/BrieflyAboutTheMainThing.jsx';
import TitleHere from './components/TitleHere/TitleHere.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './fonts/fontello/css/fontello.css';
import { useSelector } from 'react-redux';
import { getIsDarkTheme } from './redux/header-selectors.ts';

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
    <div className={[isDarkTheme ? 'App _DARK_theme':'App']}>
      <HeaderContainer />
      <ITSTimeForHiking />
      <TitleBlock />
      <Features />
      <TwoPartBlocks />
      <TitleMountains />
      <BrieflyAboutTheMainThing />
      <TitleHere />
      <Footer />


    </div>
  );
}

export default App;
