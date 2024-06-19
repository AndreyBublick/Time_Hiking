
import React, { memo, useState } from 'react';
import style from './TitleHere.module.scss';
import { MountainHeader } from '../TitleMountains/MountainHeader/MountainHeader.tsx';
import { InputEmail } from '../OftenUse/InputEmail/InputEmail.tsx';




import image1 from '../../content/images/slider/01.jpg';
import image2 from '../../content/images/slider/02.jpg';
import image3 from '../../content/images/slider/05.jpg';
import { imagesType } from '../TitleMountains/TitleMountains.tsx';





export const TitleHere = memo((props) => {
    const [images, setImages] = useState<imagesType[]>([
        {
            original : image1 as string,
            thumbnail: "",
        },
        {
            original : image2 as string,
            thumbnail: "",
        },
        {
            original : image3 as string,
            thumbnail: "",
        },],
    );


    return <section className={style.TitleHere}>
        <div className={style.TitleHere__body}>



            <MountainHeader images={images} Child={InputEmail} />

        </div>
    </section>
});

