import { Button } from "antd";

        import style from './ButtonMaket.module.scss';
import { memo } from "react";


export const ButtonMaket =memo( ({textButton,...props}) => {

    return <div className={style.button}>
        


        
        <Button key={10000} {...props} /* textButton={props.textButton} loading={props.isLoadButton} disabled={props.isDisabledButton} onClick={props.setCountPlus} */><span>{textButton}</span></Button>
    </div>
});

{/* <Button textButton={'Show more'} loading={isLoadButton} disabled={isDisabledButton} onClick={setCountPlus}>Show more</Button> */}