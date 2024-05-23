import { Button } from "antd";

import style from './ButtonMaket.module.scss';
import { memo } from "react";
import { v4 as uuidv4 } from 'uuid';




///HandleSubmit
export const ButtonMaket = memo(({ isDisabled,onClickFC,textButton,loading,type, ...props }) => {

    return <div className={style.button}>

        <Button loading={loading} htmlType={type} disabled={isDisabled} onClick={onClickFC} key={uuidv4()} {...props}  ><span>{textButton}</span></Button>
    </div>
});

