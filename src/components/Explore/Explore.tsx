import React from 'react';
import style from './Explore.module.scss';



export const Explore = () => {

    return <div  className={[style.explore].join(' ')}>

    <div className={style.explore__content}>
        <div className={style.explore__body}>
            <div className={style.explore__item}>
                <div data-aos-anchor-placement='top-bottom' data-aos="fade-right" data-aos-delay="350" className={style.explore__title}>
                    <p>explore</p>
                </div>
                <div data-aos-anchor-placement='top-bottom' data-aos="fade-right" data-aos-delay="550" className={style.explore__sub_title}>
                    <p>the world</p>
                </div>
            </div>

        </div>
    </div>





</div>

};