import { Button } from "antd";

import style from './ButtonMaket.module.scss';
import React, { FC, memo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export type propsTypeButton = {
    isDisabled?:boolean,
    onClickFC:()=>void,
    textButton:string,
    loading?:boolean,
    type:'submit'|'button'|'reset',
   /*  props:any, */
};


///HandleSubmit
export const ButtonMaket:FC<propsTypeButton> = memo(({ isDisabled, onClickFC, textButton, loading, type }) => {

    /* const [isActiveButton,setIsActiveButton] = useState(false);
    
        const addCircle = (e) => {
           
            setIsActiveButton(true);
    
        };
        const removeCircle = (e) => {
            setIsActiveButton(false);
    
        }; */


    return <div className={style.button}>

        <Button loading={loading} htmlType={type} disabled={isDisabled} onClick={onClickFC} key={uuidv4()} /* {...props} */><span>{textButton}</span></Button>
    </div>
});

