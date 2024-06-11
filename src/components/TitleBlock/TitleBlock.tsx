import React, { FC } from 'react';
import TitleBlockstyle from './TitleBlock.module.scss';


type propsType = {
  

};

export const TitleBlock: FC<propsType> = (props) => {

    return <section className={TitleBlockstyle.titleBlock}>
        <div className={[TitleBlockstyle.titleBlock__container, 'container'].join(' ')}>
            <div className={TitleBlockstyle.titleBlock__body}>
                <h2 className={TitleBlockstyle.title}>
                    {'let`s go'}
                </h2>
                <p className={TitleBlockstyle.subTitle}>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vivamus lacinia odio vitae vestibumlum vestibulum.'}</p>
            </div>


        </div>



    </section>;

};