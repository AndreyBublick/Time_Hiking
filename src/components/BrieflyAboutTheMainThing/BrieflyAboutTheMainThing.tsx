import React, { FC } from 'react';
import style from './BrieflyAboutTheMainThing.module.scss';
import { Cards } from './Cards/Cards.tsx';
import { useSelector } from 'react-redux';
import { getIsDarkTheme } from '../../redux/header-selectors.ts';



export const BrieflyAboutTheMainThing = () => {

const isDarkTheme = useSelector(getIsDarkTheme);


    return <section className={[style.BrieflyAboutTheMainThing,isDarkTheme ? style._Dark:''].join(' ')}>

        <div className={[style.BrieflyAboutTheMainThing__container, 'container'].join(' ')}>


            <div className={[style.BrieflyAboutTheMainThing__body].join(' ')}>

                <div className={[style.BrieflyAboutTheMainThing__cards].join(' ')}>

                    <Cards isDarkTheme={isDarkTheme} />




                </div>

                <div className={[style.BrieflyAboutTheMainThing__content, style.content].join(' ')}>
                    <div className={[style.content__body].join(' ')}>
                        <div className={[style.content__symbol].join(' ')}>
                            <div>“</div>
                        </div> 
                        <div data-aos-anchor-placement='top-bottom' data-aos="zoom-in" data-aos-delay="350" className={[style.content__text].join(' ')}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        </div>
                        <div data-aos-anchor-placement='top-bottom' data-aos="zoom-in-up" data-aos-delay="350"  className={[style.content__PS].join(' ')}>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>

                </div>


            </div>


        </div>



    </section>

};