import { BrieflyAboutTheMainThing } from "../../components/BrieflyAboutTheMainThing/BrieflyAboutTheMainThing.jsx";
import { Explore } from "../../components/Explore/Explore.jsx";
import Features from "../../components/Features/Features.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import HeaderContainer from "../../components/Header/HeaderContainer.tsx";
import ITSTimeForHiking from "../../components/ITSTimeForHiking/ITSTimeForHiking.tsx";
import { TitleBlock } from "../../components/TitleBlock/TitleBlock.tsx";
import TitleHere from "../../components/TitleHere/TitleHere.jsx";
import { TitleMountains } from "../../components/TitleMountains/TitleMountains.jsx";
import { TwoPartBlocks } from "../../components/TwoPartBlocks/TwoPartBlocks.jsx";



export const ContactsPage = () => {
    return <>
        <HeaderContainer />
        <div  className='wrapper'>
       <Explore />
        </div>
        <Footer />
    </>
};