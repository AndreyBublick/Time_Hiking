

import style from './InputEmail.module.scss';
import { memo } from "react";
import { ButtonMaket } from "../Buttons/Button/ButtonMaket.jsx";


export const InputEmail = memo((props) => {

    return <div className={style.InputEmail}>
        <div className={style.InputEmail__body}>
            <div className={style.InputEmail__item}>
                <input type="Email" placeholder='Your Email' />
                <div className={style.InputEmail__button}>

                    <ButtonMaket textButton={'Subscribe'} />

                </div>
            </div>

        </div>

    </div>
});

