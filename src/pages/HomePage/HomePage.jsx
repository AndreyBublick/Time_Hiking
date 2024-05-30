import { BrieflyAboutTheMainThing } from "../../components/BrieflyAboutTheMainThing/BrieflyAboutTheMainThing";
import Features from "../../components/Features/Features";
import { Footer } from "../../components/Footer/Footer.jsx";
import HeaderContainer from "../../components/Header/HeaderContainer.tsx";
import ITSTimeForHiking from "../../components/ITSTimeForHiking/ITSTimeForHiking.tsx";
import { TitleBlock } from "../../components/TitleBlock/TitleBlock.tsx";
import TitleHere from "../../components/TitleHere/TitleHere";
import { TitleMountains } from "../../components/TitleMountains/TitleMountains";
import { TwoPartBlocks } from "../../components/TwoPartBlocks/TwoPartBlocks";



export const HomePage = () => {
    return <>
        <HeaderContainer />
        <div id={'start-page'} className='wrapper'>

            <ITSTimeForHiking />
            <TitleBlock />
            <Features />
            <TwoPartBlocks />
            <TitleMountains />
            <BrieflyAboutTheMainThing />
            <TitleHere />
        </div>
        <Footer />
    </>
};