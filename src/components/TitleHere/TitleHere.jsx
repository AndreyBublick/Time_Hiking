
import { memo, useState } from 'react';
import style from './TitleHere.module.scss';
import { MountainHeader } from '../TitleMountains/MountainHeader/MountainHeader.jsx';
import { InputEmail } from '../OftenUse/InputEmail/InputEmail.jsx';




import image1 from '../../content/images/slider/01.jpg';
import image2 from '../../content/images/slider/02.jpg';
import image3 from '../../content/images/slider/05.jpg';





const TitleHere = memo((props) => {
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
        },],
    );


    return <div className={style.TitleHere}>
        <div className={style.TitleHere__body}>



            <MountainHeader images={images} Child={InputEmail} />

        </div>
    </div>
});

export default TitleHere;