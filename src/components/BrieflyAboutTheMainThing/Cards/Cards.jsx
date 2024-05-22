

import React, { FC } from 'react';
import style from './Cards.module.scss';
import { useSelector } from 'react-redux';
import { getCardsData } from '../../../redux/brieflyAboutTheMainThing-selectors.ts';



export const Cards = (props) => {

    const cardsData = useSelector(getCardsData);

    const cards = cardsData.map((item) => {
        return <div key={item.id} className={[style.cards__item, style.card].join(' ')}>
            <div className={[style.card__body].join(' ')}>

                <div className={[style.card__title].join(' ')}>

                    <p>{item.cardTitle}</p>


                </div>
                <div className={[style.card__text].join(' ')}>

                    <p>{item.cardText}</p>


                </div>


            </div>



        </div>


    });



    return <div className={[style.cards].join(' ')}>

        <div className={[style.cards__body].join(' ')}>

            <div className={[style.cards__items].join(' ')}>
                {cards}



            </div>


        </div>


    </div>

};