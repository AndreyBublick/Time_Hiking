import React, { FC, memo, useState } from 'react';
import style from './TitleMountains.module.scss';
import { Explore } from '../Explore/Explore';

import { MountainHeader } from './MountainHeader/MountainHeader';
import image1 from '../../content/images/slider/03.jpg';
import image2 from '../../content/images/slider/04.jpg';
import image3 from '../../content/images/slider/06.jpg';


export const TitleMountains = memo((props) => {

   
    
    
    
    
    
    
        const [images, setImages] = useState([
            {
                original: image1,
                thumbnail: "",
            },
            {
                original: image2,
                thumbnail: "",
            },
            {
                original: image3,
                thumbnail: "",
            },
        ],
        );


    return <div className={style.mountain}>


        <MountainHeader images={images}/>

        <Explore  />
    </div>



});