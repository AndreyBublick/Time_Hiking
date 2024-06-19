

import style from './InputEmail.module.scss';
import React, { ChangeEvent, FC, FormEventHandler, memo, useCallback, useRef, useState } from "react";
import { ButtonMaket } from "../Buttons/Button/ButtonMaket.tsx";
import { ConfigProvider } from 'antd';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';






export const InputEmail:FC<inputEmailPropsType> = memo(({ placeHolder, ...props }) => {
   /*  const isDarkTheme = useSelector(getIsDarkTheme); */
   /*  const recaptcha = useRef(); */
    const [valueEmail, setValueEmail] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [isGoSend, setIsGoSend] = useState(true);

    const testFC = useCallback(()=>{},[]); 

/* 
useEffect(()=>{
    setDark(isDarkTheme);
},[isDarkTheme]);
 */

    const recaptchaRef = useRef();
    const handleReset = () => {
        setIsGoSend(true);
        ///@ts-ignore 
        recaptchaRef.current.reset();
        
    };



    const changeInputEmailValue = (e:ChangeEvent<HTMLInputElement>) => {

        setValueEmail(e.target.value);

    };

    const sendValueInputEmail:FormEventHandler<HTMLFormElement> = (e) => {


        if (!(valueEmail === '') && !(valueEmail.startsWith(' '))) {
            setIsLoad(true);

            e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

            emailjs.sendForm('service_ddi3iyn', 'template_vjw3z28', e.currentTarget, 'JATD2Y0X_IKx-MWjM')
                .then((result) => {
                    setValueEmail('');
                    setIsLoad(false);
                    setIsGoSend(true);
                    handleReset();
                    /* window.location.reload() */   //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
                }, (error) => {
                    console.log(error.text);
                });

        }
        else {
            e.preventDefault();
        }



    };

    const prepareForSend = () => {
        setIsGoSend((prev) => !prev);
    };


    ///82238
    return <form className="contact-form" onSubmit={sendValueInputEmail}> <div className={style.InputEmail}>
        <div className={style.InputEmail__body}>
            <div className={style.InputEmail__item}>

                <input disabled={isLoad} name='to_email' placeholder={placeHolder} onChange={changeInputEmailValue} value={valueEmail} type="Email" />


                <div className={style.InputEmail__button}>


                    <ConfigProvider
                        theme={{
                            token: {
                                colorBgContainerDisabled: '#fff',
                                colorTextDisabled: 'rgb(217, 217, 217)',
                                colorText: '#fff',


                            },
                            components: {
                                Button: {
                                    /* here is your component tokens */
                                    /*  defaultHoverColor:'#454545', */
                                    defaultHoverBg: '#e2a355',
                                    defaultHoverBorderColor: '#fff',

                                    defaultHoverColor: '#fff',

                                    defaultActiveBg: 'transparent',
                                    defaultActiveBorderColor: '#7f7770',
                                    defaultActiveColor: '#7f7770',

                                },
                            },
                        }}
                    >

                        <ButtonMaket loading={isLoad} onClickFC={testFC} isDisabled={isGoSend} textButton={'subscribe'} type={'submit'} />
                    </ConfigProvider>
                </div>

            </div>
            <div className={style.InputEmail__recap}>
                <ReCAPTCHA theme={'dark'} ref={recaptchaRef} onChange={prepareForSend} sitekey={'6LchUuYpAAAAAOnaNq_E5ARp1raV9pTS41Iq0_ng'} />

            </div>
        </div>

    </div>

    </form>
});

export type inputEmailPropsType = {
    placeHolder:string,
};