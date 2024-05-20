import React, { FC } from 'react';
import style from './TitleMountains.module.scss';
import { Explore } from '../Explore/Explore';



export const TitleMountains = (props) => {

    return <div className={style.mountain}>


        <div className={[style.title_mountains,style.mountain__title].join(' ')}>
            <div className={style.title_mountains__body}>
                <div className={style.title_mountains__container}>
                    <div className={[style.title_mountains__content, style.content].join(' ')}>
                        <div className={style.content__body}>
                            <div className={style.content__title}>
                                <p>Hiking in the mountains</p>
                            </div>
                            <div className={style.content__sub_title}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam quis  
                                    </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <Explore />
    </div>



};