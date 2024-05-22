import { Button } from "antd";

import style from './ButtonMaket.module.scss';
import { memo } from "react";


export const ButtonMaket = memo(({ textButton, ...props }) => {

    return <div className={style.button}>

        <Button key={10000} {...props} ><span>{textButton}</span></Button>
    </div>
});

