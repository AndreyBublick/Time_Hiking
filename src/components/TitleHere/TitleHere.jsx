
import { memo } from 'react';
import style from './TitleHere.module.scss';
import { MountainHeader } from '../TitleMountains/MountainHeader/MountainHeader.jsx';
import { InputEmail } from '../OftenUse/InputEmail/InputEmail.jsx';







const TitleHere = memo( (props) => {
    return <div className={style.TitleHere}>
        <div className={style.TitleHere__body}>
        

        
        <MountainHeader Child={InputEmail}  />
        
        </div>
    </div>
});

export default TitleHere;