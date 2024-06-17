import { useSelector } from 'react-redux';
import styleFeatures from './Features.module.scss';
import { getFeaturesCardsSelector } from '../../redux/features-selectors.ts';
import { ConfigProvider, Modal } from 'antd';
import React, { memo, useCallback, useEffect, useState } from 'react';



import { getIsDarkTheme } from '../../redux/header-selectors.ts';
import { ButtonMaket } from '../OftenUse/Buttons/Button/ButtonMaket.tsx';
import { PopupClassic } from '../OftenUse/Popup/Classic/Classic.tsx';


const Features = memo((props) => {

    const isDarkTheme = useSelector(getIsDarkTheme);
    ////прокидывает state из контекста
    const cardsData = useSelector(getFeaturesCardsSelector);

    const [count, setCount] = useState(1);
    const [isLoadButton, setIsLoadButton] = useState(false);
    const [isDisabledButton, setIsDisabledButton] = useState(false);
    const [newCardsData, setNewCardsData] = useState<newCardsDataType[]>([]);
    /* const [сards, setCards] = useState([]); */

    /*     const [pointsEvent, setPointsEvent] = useState([]); */


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contentModal, setContentModal] = useState<newCardsDataType>({
        id:0,
        cardText:'',
        cardTitle:'',
        image:'',
    });

  


    const showModal = () => {

        setIsModalOpen(true);

    };



    const setHowManyCardsShow = (itemsView) => {

        if (cardsData.length <= count * itemsView) {
            setIsDisabledButton(true);

        }


        setNewCardsData(cardsData.filter((i, index) => { let cards = count * itemsView; return index < cards }));

    };
    const addCards = () => {




        if (window.innerWidth <= 1200) {
            setHowManyCardsShow(4);
        }
        else {
            setHowManyCardsShow(3);
        }
        setIsLoadButton(false);



    };
    const setCountPlus = useCallback(() => {
        /*  if(cardsData.length>count*3){
                    setIsActiveButton((prev) => !prev);
                
                } */
        setIsLoadButton(true);


        setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 2000);
    },[]);





    useEffect(() => {

        addCards();




    }, [count]);






    const setNewDataModal = (item:newCardsDataType)=>{
        
        
        setContentModal({ id:item.id,image: item.image, cardTitle: item.cardTitle, cardText: item.cardText, });
    };









    let cards = newCardsData.map((item, index, array) => {

        const generateCardBody = () => {
            return <div onClick={()=> {setNewDataModal(item);showModal(); }} className={styleFeatures.item__body}>

                <div className={styleFeatures.item__picture}>
                    <div className={styleFeatures.item__image}>
                        <img src={item.image} alt={'#'} />

                    </div>

                </div>

                <div className={styleFeatures.item__content}>
                    <div className={styleFeatures.item__title}>
                        {item.cardTitle}

                    </div>
                    <div className={styleFeatures.item__text}>
                        {item.cardText}

                    </div>

                </div>


            </div>




        };



        if (window.innerWidth < 1200) { /* первый параметр точка самой карточки 2.Параметр часть viewport */
            if (index % 2 === 0) {

                return <div key={item.id} data-aos-anchor-placement='top-bottom' data-aos="fade-left" data-aos-delay="350" className={[styleFeatures.item, 'event'].join(' ')}>
                    {generateCardBody()}
                </div>;

            }
            else {


                return <div data-aos-anchor-placement='top-bottom' data-aos="fade-right" data-aos-delay="350" key={item.id} className={[styleFeatures.item, 'event'].join(' ')}>
                    {generateCardBody()}
                </div>;
            }
        }
        return <div key={item.id} data-aos-anchor-placement='top-bottom' data-aos="fade" data-aos-delay="150" className={[styleFeatures.item, 'event'].join(' ')}>
            {generateCardBody()}
        </div>;




    });

    /*  const Icon = ()=>{
         return <div className={styleFeatures._Icon}>X</div>
     }; */


    return <section className={[styleFeatures.features, isDarkTheme ? styleFeatures._Dark : ''].join(' ')}>
        {/*  <ConfigProvider
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

            }}
        >

            <Modal closeIcon={null} footer={null} title={contentModal.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div onClick={handleOk} className={isDarkTheme ? styleFeatures.item__Icon_dark_theme:styleFeatures.item__Icon_white_theme}></div>

                <div style={{ marginBottom: '20px' }} className={styleFeatures.item__picture}>
                    <div className={styleFeatures.item__image}>
                        <img src={contentModal.image} alt={'#'} />

                    </div>

                </div>
                <p>{contentModal.text}</p>


            </Modal>
        </ConfigProvider> */}{/* isModalOpen */}
        
        <PopupClassic isTwoParts={false} setNewDataModal={setNewDataModal} image={contentModal.image} text={contentModal.cardText} id={contentModal.id}
         title={contentModal.cardTitle} isOpen={isModalOpen}
         setIsModalOpen={setIsModalOpen} />


        <div className={[styleFeatures.container, 'container'].join(' ')}>
            <div className={styleFeatures.body}>
                <div className={[styleFeatures.items, 'features__event_block'].join(' ')}>
                    {cards}


                </div>
                {!isDisabledButton && <div className={[styleFeatures.show_more_button, 'button'].join(' ')}>
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


                                },
                            },
                        }}
                    >

                        <ButtonMaket type={'button'} textButton={'Show more'} loading={isLoadButton} isDisabled={isDisabledButton} onClickFC={setCountPlus}></ButtonMaket>
                        {/* <Button textButton={'Show more'} loading={isLoadButton} disabled={isDisabledButton} onClick={setCountPlus}>Show more</Button> */}
                    </ConfigProvider>


                </div>}
            </div>
        </div>
    </section>

});

export default Features;



export type newCardsDataType = {
    id: number,
    image: string,
    cardTitle: string,
    cardText: string,
} 