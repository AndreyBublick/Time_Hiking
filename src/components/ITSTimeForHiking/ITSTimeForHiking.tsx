
import ITSTimeForHikingStyle from './ITSTimeForHiking.module.scss';
import backgroundBlock from '../../content/images/ITSTimeForHiking/headerBackground_1.png';
import backgroundBlockTop from '../../content/images/ITSTimeForHiking/Shape-1.png';
 import backgroundBlockBottom from '../../content/images/ITSTimeForHiking/Shape.png';

import React from 'react';
import { NavLink } from 'react-router-dom';

const ITSTimeForHiking = (props: any) => {
    return <div id={'start-page'} className={ITSTimeForHikingStyle.ITSTimeForHiking}>
        <div className={ITSTimeForHikingStyle.ITSTimeForHiking__container +' '+ 'container'}>
            <div className={ITSTimeForHikingStyle.ITSTimeForHiking__body}>
                <div className={ITSTimeForHikingStyle.ITSTimeForHiking__content}>
                    <h1 className={ITSTimeForHikingStyle.ITSTimeForHiking__title}>
                        it`s time<br/> for hiking
                    </h1>
                    <div className={ITSTimeForHikingStyle.ITSTimeForHiking__sub_title}>
                        Loremipsum dolor
                    </div>
                    <NavLink className={ITSTimeForHikingStyle.ITSTimeForHiking__button} to={`/`}>read more</NavLink>
                    <div className={ITSTimeForHikingStyle.ITSTimeForHiking__text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Esse nobis sapiente corporis rerum. Natus alias totam rerum,
                         mollitia dicta cupiditate dolor.
                          
                    </div>
                </div>
            </div>
        </div>

        <img src={backgroundBlock} className={ITSTimeForHikingStyle.ITSTimeForHiking__background} />
           {/*  <img src={backgroundBlockBottom} className={ITSTimeForHikingStyle.ITSTimeForHiking__background_top}/>
            <img src={backgroundBlockTop} className={ITSTimeForHikingStyle.ITSTimeForHiking__background_bottom}/> */}
        
    </div>;
};
export default ITSTimeForHiking;