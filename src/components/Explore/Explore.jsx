import React, { FC } from 'react';
import style from './Explore.module.scss';



export const Explore = (props) => {

    return <div className={[style.explore].join(' ')}>

    <div className={style.explore__content}>
        <div className={style.explore__body}>
            <div className={style.explore__item}>
                <div className={style.explore__title}>
                    <p>explore</p>
                </div>
                <div className={style.explore__sub_title}>
                    <p>the world</p>
                </div>
            </div>

        </div>
    </div>





</div>

};