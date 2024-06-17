import React, { FC, memo, useCallback, useEffect, useState, } from "react";
import style from './APairBlock.module.scss';
/* import { Button, ConfigProvider } from 'antd';
 */import { ButtonEffectCircle } from "../../OftenUse/Buttons/Button/ButtonEffectCircle/ButtonEffectCircle.tsx";
import { PopupClassic } from "../../OftenUse/Popup/Classic/Classic.tsx";
import Aos from "aos";
import { getIsDarkTheme } from "../../../redux/header-selectors.ts";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


/* import { uuid } from 'uuidv4'; */
/* import { uuid } from 'uuidv4'; */
import { newCardsDataType } from "../../Features/Features.tsx";





export const APairBlock:FC<propsType> = memo ((props) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contentModal, setContentModal] = useState<newCardsDataType>({
        id:0,
        cardText:'',
        cardTitle:'',
        image:'',
    });

    const onClickEvent = useCallback(()=>{showModal();setContentModal({id:contentModal.id,image:props.image, cardText:props.textBody,cardTitle:props.textTitle})},[]); ;

    const [castomId,setCastomId] = useState('');
    
    const isDarkTheme = useSelector(getIsDarkTheme);/// thema

  

  useEffect(()=>{
    
    
    setCastomId(uuidv4());
  },[]);

    const showModal = () => {

        setIsModalOpen(true);

    };

    return <div key={castomId} className={style.content_block}>

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
                        <ButtonEffectCircle type={'button'} onClickFC={onClickEvent} textButton={'Read more'}/>
                        
                   {/*  </ConfigProvider> */}

            <PopupClassic id={contentModal.id} setNewDataModal={setContentModal} isTwoParts={true} title={contentModal.cardTitle} image={contentModal.image} text={contentModal.cardText} isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                        
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



});

type propsType = {
    image:string,
    textTitle:string,
    textBody:string,
};