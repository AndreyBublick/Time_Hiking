import { ConfigProvider, Modal } from "antd";
import styleFeatures from '../../../Features/Features.module.scss';

import style from './Classic.module.scss';

import { useSelector } from "react-redux";
import { getIsDarkTheme } from "../../../../redux/header-selectors.ts";
import React, { FC, memo, useEffect, useState } from "react";
import { newCardsDataType } from "../../../Features/Features.tsx";
import { clamp } from "gsap";



type propsType = {
    title:string,
    image:string,
    text:string,
    isOpen:boolean,
    id:number,
    isTwoParts:boolean,
   /*  isTwoParts:boolean, */


    setIsModalOpen:(isModalOpen:boolean) => void,
setNewDataModal:(item: newCardsDataType) => void,
};


export const PopupClassic:FC<propsType> = memo(({ title, image, text,id, isOpen, setIsModalOpen,  isTwoParts,  setNewDataModal }) => {
    /* const [isModalOpen, setIsModalOpen] = useState(false); */

    const isDarkTheme = useSelector(getIsDarkTheme);

    const [isTwoPartsState, setTwoPartsState] = useState(isTwoParts);
    const onResize = () => {
        let widthPx = window.innerWidth;
        if (isTwoPartsState) {
            if (widthPx <= 567) {
                setTwoPartsState(false);
            }
            else {
                setTwoPartsState(true);
            }
        }

    };
    useEffect(() => {
       

        window.addEventListener('resize', onResize);
        onResize();
        return () => {
            window.removeEventListener('resize', onResize);

        };
    }, []);

    const handleOk = () => {
        setNewDataModal({
            /* text: '',
            title: '',
            image: '', */
            id: 0,
            image: '',
            cardTitle: '',
            cardText: '',
        });
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setNewDataModal({
           /*  text: '',
            title: '',
            image: '', */
            id: 0,
            image: '',
            cardTitle: '',
            cardText: '',
        });

        setIsModalOpen(false);
    };


    return <ConfigProvider
        theme={{

            components: {

                Modal: {
                    titleFontSize: 30,

                    contentBg: isDarkTheme ? '#7f7770' : '#ffffff',
                    headerBg: isDarkTheme ? '#7f7770' : '#ffffff',
                    titleColor: isDarkTheme ? '#fff' : '#3f3f3f',
                    colorText: isDarkTheme ? '#fff' : 'black',
                    fontSize: 18,
                    colorBgMask: 'rgba(50,47,44,0.8)',
                    colorIcon: isDarkTheme ? '#fff' : 'black',
                    colorIconHover: 'red',




                },
            },

        }}>

        <Modal /* styles={{ body: { overflow: 'hidden'}}} */ key={id} width={isTwoPartsState ? '1000px' : '600px'} closeIcon={null} footer={null} title={title} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
            <div onClick={handleOk} className={isDarkTheme ? styleFeatures.item__Icon_dark_theme : styleFeatures.item__Icon_white_theme} ></div>
            
            <div style={isTwoPartsState ? { display: 'flex', paddingTop: 11 } : {}}>
                <div style={isTwoPartsState ? { position: 'relative', paddingTop: '50%', marginRight: '25px', /* marginBottom: '4', */ flexBasis: '40%', marginBottom: '0' } :  { marginBottom: '20px' }} className={styleFeatures.item__picture}>
                    <div style={isTwoPartsState ? { /* paddingTop:'100%' */ top: 0, left: 0, position: 'absolute', width: `${100}%`, height: `${100}%`, } : {}} className={styleFeatures.item__image}>
                        <img style={isTwoPartsState ? { width: `${100}%`, height: `${100}%` } : {}} src={image} alt={'#'} />

                    </div>

                </div>

                <div style={isTwoPartsState ? { flexBasis: '60%', padding: '35px 0', alignSelf: "center" } : {}}>
                    <p>{text}</p>
                </div>

            </div>



        </Modal>
    </ConfigProvider>
});