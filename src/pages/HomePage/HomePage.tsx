
import React from "react";
import { BrieflyAboutTheMainThing } from "../../components/BrieflyAboutTheMainThing/BrieflyAboutTheMainThing.tsx";
import {Features} from "../../components/Features/Features.tsx";
/* import HeaderContainer from "../../components/Header/HeaderContainer.tsx"; */
import ITSTimeForHiking from "../../components/ITSTimeForHiking/ITSTimeForHiking.tsx";
import { TitleBlock } from "../../components/TitleBlock/TitleBlock.tsx";
import {TitleHere} from "../../components/TitleHere/TitleHere.tsx";
import { TitleMountains } from "../../components/TitleMountains/TitleMountains.tsx";
import { TwoPartBlocks } from "../../components/TwoPartBlocks/TwoPartBlocks.tsx";




export const HomePage = () => {

    return <>
        


                <div className='wrapper' >
                        <ITSTimeForHiking />
                        <TitleBlock />
                        <Features />
                        <TwoPartBlocks />
                        <TitleMountains />
                        <BrieflyAboutTheMainThing />
                        <TitleHere />
                    </div>
                

       
    </>
};