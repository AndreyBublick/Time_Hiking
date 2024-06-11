/* import { ConfigProvider, Modal } from "antd";
import styleFeatures from '../../../Features/Features.module.scss';

import style from '../TwoParts/TwoParts.module.scss';

import { useSelector } from "react-redux";
import { getIsDarkTheme } from "../../../../redux/header-selectors.ts";
import { memo } from "react";



export const PopupTwoParts = memo(({ title, image, text, isOpen, setIsModalOpen }) => {

    const isDarkTheme = useSelector(getIsDarkTheme);


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return <ConfigProvider
        theme={{

            components: {

                Modal: {
                    titleFontSize: '2rem',

                    contentBg: isDarkTheme ? '#7f7770' : '#ffffff',
                    headerBg: isDarkTheme ? '#7f7770' : '#ffffff',
                    titleColor: isDarkTheme ? '#fff' : '#3f3f3f',
                    colorText: isDarkTheme ? '#fff' : 'black',
                    fontSize: '1.6rem',
                    colorBgMask: 'rgba(50,47,44,0.8)',
                    colorIcon: isDarkTheme ? '#fff' : 'black',
                    colorIconHover: 'red',




                },
            },

        }}>

        <Modal closeIcon={null} footer={null} title={title} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
            <div onClick={handleOk} className={isDarkTheme ? styleFeatures.item__Icon_dark_theme : styleFeatures.item__Icon_white_theme}></div>

            <div style={{ marginBottom: '20px' }} className={styleFeatures.item__picture}>
                <div className={styleFeatures.item__image}>
                    <img src={image} alt={'#'} />

                </div>

            </div>
            <p>{text}</p>


        </Modal>
    </ConfigProvider>
}); */