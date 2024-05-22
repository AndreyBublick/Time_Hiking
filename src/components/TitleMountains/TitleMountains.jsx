import React, { FC } from 'react';
import style from './TitleMountains.module.scss';
import { Explore } from '../Explore/Explore';

import { MountainHeader } from './MountainHeader/MountainHeader';



export const TitleMountains = (props) => {

    return <div className={style.mountain}>


        <MountainHeader />

        <Explore  />
    </div>



};