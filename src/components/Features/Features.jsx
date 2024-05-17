import { useSelector } from 'react-redux';
import styleFeatures from './Features.module.scss';
import { getFeaturesCardsSelector } from '../../redux/features-selectors.ts';
import { Button, ConfigProvider } from 'antd';
import { memo, useEffect, useState } from 'react';


import { ButtonMaket } from '../OftenUse/Buttons/Button/ButtonMaket.jsx';
import { v4 as uuidv4 } from 'uuid';


const Features = memo( (props) => {
    
    ////прокидывает state из контекста
    const cardsData = useSelector(getFeaturesCardsSelector);

    const [count, setCount] = useState(1);
    const [isLoadButton, setIsLoadButton] = useState(false);
    const [isDisabledButton, setIsDisabledButton] = useState(false);
    const [newCardsData, setNewCardsData] = useState([]);
    const [сards, setCards] = useState([]);
 
    /*     const [pointsEvent, setPointsEvent] = useState([]); */





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
    const setCountPlus = () => {
        /*  if(cardsData.length>count*3){
                    setIsActiveButton((prev) => !prev);
                
                } */
        setIsLoadButton(true);


        setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 2000);
    }



    

    useEffect(() => {
        
        addCards();


        

    }, [count]);



   

    
   









    let cards = newCardsData.map((item, index, array) => {

        if (window.innerWidth < 1200) { /* первый параметр точка самой карточки 2.Параметр часть viewport */
            if (index % 2 === 0) {

                return <div key={item.id} data-aos-anchor-placement='top-bottom' data-aos="fade-left" data-aos-delay="350" className={[styleFeatures.item, 'event'].join(' ')}>
                    <div className={styleFeatures.item__body}>

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
                </div>;

            }
            else {
                

                return <div data-aos-anchor-placement='top-bottom' data-aos="fade-right" data-aos-delay="350" key={item.id} className={[styleFeatures.item, 'event'].join(' ')}>
                    <div className={styleFeatures.item__body}>

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
                </div>;
            }
        }
        return <div key={item.id} data-aos-anchor-placement='top-bottom' data-aos="fade" data-aos-delay="150" className={[styleFeatures.item, 'event'].join(' ')}>
            <div className={styleFeatures.item__body}>

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
        </div>;




    });



    return <div className={styleFeatures.features}>
        <div className={[styleFeatures.container, 'container'].join(' ')} >
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

                        <ButtonMaket textButton={'Show more'} loading={isLoadButton} disabled={isDisabledButton} onClick={setCountPlus}></ButtonMaket>
                        {/* <Button textButton={'Show more'} loading={isLoadButton} disabled={isDisabledButton} onClick={setCountPlus}>Show more</Button> */}
                    </ConfigProvider>


                </div>}
            </div>
        </div>
    </div>

});

export default Features;