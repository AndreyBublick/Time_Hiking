

import style from './InputEmail.module.scss';
import { memo } from "react";
import { ButtonMaket } from "../Buttons/Button/ButtonMaket.jsx";
import { ConfigProvider } from 'antd';


export const InputEmail = memo(({placeHolder,...props}) => {

    return <div className={style.InputEmail}>
        <div className={style.InputEmail__body}>
            <div className={style.InputEmail__item}>
                <input placeholder={placeHolder} type="Email" />
                <div className={style.InputEmail__button}>


                    <ConfigProvider
                        theme={{
                            token: {
                                colorBgContainerDisabled: '#fff',
                                colorTextDisabled: '#fff',
                                colorText: '#fff',


                            },
                            components: {
                                Button: {
                                    /* here is your component tokens */
                                    /*  defaultHoverColor:'#454545', */
                                    defaultHoverBg: '#e2a355',
                                    defaultHoverBorderColor: '#fff',

                                    defaultHoverColor: '#fff',

                                    defaultActiveBg:'transparent',
                                     defaultActiveBorderColor:'#7f7770',
                                    defaultActiveColor: '#7f7770',

                                },
                            },
                        }}
                    >

                        <ButtonMaket textButton={'subscribe'} />
                    </ConfigProvider>
                </div>
            </div>
           
        </div>

    </div>
});

