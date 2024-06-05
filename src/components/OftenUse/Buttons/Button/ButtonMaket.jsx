import { Button } from "antd";

import style from './ButtonMaket.module.scss';
import { memo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';




///HandleSubmit
export const ButtonMaket = memo(({ isDisabled, onClickFC, textButton, loading, type, ...props }) => {

const [isActiveButton,setIsActiveButton] = useState(false);

    const addCircle = (e) => {
       
        setIsActiveButton(true);

    };
    const removeCircle = (e) => {
        setIsActiveButton(false);

    };


    return <div className={style.button}>

        <Button  loading={loading} htmlType={type} disabled={isDisabled} onClick={onClickFC} key={uuidv4()} {...props}><span>{textButton}</span></Button>
    </div>
});

