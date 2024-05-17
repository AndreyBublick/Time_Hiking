import { Button } from "antd";

        import style from './ButtonMaket.module.scss';


export const ButtonMaket = ({textButton,...props}) => {

    return <div className={style.button}>
        


        
        <Button {...props} /* textButton={props.textButton} loading={props.isLoadButton} disabled={props.isDisabledButton} onClick={props.setCountPlus} */><span>{textButton}</span></Button>
    </div>
};

{/* <Button textButton={'Show more'} loading={isLoadButton} disabled={isDisabledButton} onClick={setCountPlus}>Show more</Button> */}