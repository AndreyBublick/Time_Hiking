
import { useEffect } from 'react';
import './App.module.scss';
import Features from './components/Features/Features.jsx';
import HeaderContainer from './components/Header/HeaderContainer.tsx';
import ITSTimeForHiking from './components/Header/ITSTimeForHiking/ITSTimeForHiking.tsx';
import { TitleBlock } from './components/TitleBlock/TitleBlock.tsx';
import { TwoPartBlocks } from './components/TwoPartBlocks/TwoPartBlocks.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {

  useEffect(() => {
    AOS.init({
        once: true,
        /*  disable: "phone", */
        duration: 700,
        easing: "ease-out-cubic",
    });
}, []);


  return (
    <div className="App">
      <HeaderContainer />
      <ITSTimeForHiking />
      <TitleBlock   />
      <Features />
      <TwoPartBlocks />
     
    </div>
  );
}

export default App;
