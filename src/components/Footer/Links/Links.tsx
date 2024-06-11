
import React, { memo } from 'react';
import style from './Links.module.scss';







export const Links = memo((props) => {
    return <div className={style.links}>
        <div className={style.links__body}>
            <div className={style.links__items}>

                <div className={style.links__item}>

                    <a className={[style.instagram, 'icon-instagram'].join(' ')} href="https://www.instagram.com/" target='_blank'></a>
                    

                </div>
                <div className={style.links__item}>
                
                    <a className={[style.facebook, 'icon-facebook'].join(' ')} href='https://www.facebook.com/' target='_blank'></a>

                </div>

                <div className={style.links__item}>
                    <a className={[style.twitter, 'icon-twitter'].join(' ')} href='https://twitter.com/' target='_blank'></a>
                </div>
                <div className={style.links__item}>
                    <a className={[style.whatsapp,'icon-whatsapp'].join(' ')} href='https://www.whatsapp.com/' target='_blank'></a>
                </div>
            </div>
        </div>
    </div>
});

