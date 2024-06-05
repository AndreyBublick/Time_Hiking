import React from "react";
import style from './APairBlock.module.scss';
/* import { Button, ConfigProvider } from 'antd';
 */import { ButtonEffectCircle } from "../../OftenUse/Buttons/Button/ButtonEffectCircle/ButtonEffectCircle.jsx";






export const APairBlock = (props) => {
    
    return <div className={style.content_block}>

        <div  className={style.content}>
            <div className={style.two_art_blocks__container}>

                <div data-aos-anchor-placement='top-bottom' data-aos-offset={'200'} data-aos="zoom-in-up" className={style.content__body}>
                    <div className={style.content__title}>
                        <p>
                            {props.textTitle}
                        </p>
                    </div>
                    <div className={style.content__text}>
                        <p>
                           {props.textBody}
                        </p>
                    </div>
                    <div className={[style.content__button].join(' ')}>
                        {/* <Button><span>read more</span></Button> */}


                      {/*   <ConfigProvider
                        theme={{
                            token: {
                                colorBgContainerDisabled: 'rgb(255, 0, 0,0.0)',
                                colorTextDisabled: 'gray',
                                colorText: '#fff',
                            },
                            components: {
                                Button: {
                                   
                                    defaultHoverBg: '#dfb36f',
                                    defaultHoverBorderColor: '#fff',
                                    defaultHoverColor: '#fff',
                                    defaultActiveBorderColor:'orange',
                                    defaultActiveColor:'orange',
                                    defaultActiveBg:'transparent',


                                },
                            },
                        }}
                    > */}
                        
                       {/*  <ButtonMaket textButton={'read more'} /> */}
                        <ButtonEffectCircle onClickFC={()=>{console.log(123);}} textButton={'Read more'}/>
                        
                   {/*  </ConfigProvider> */}


                        
                    </div>
                </div>
            </div>
        </div>
        <div  className={[style.two_art_blocks__image, style.image].join(' ')}>
            <div  className={style.image__body}>
                <img data-aos-anchor-placement='top-bottom' data-aos-offset={'300'} data-aos="zoom-out" src={props.image} alt="picture" />
            </div>
        </div>

    </div>



};