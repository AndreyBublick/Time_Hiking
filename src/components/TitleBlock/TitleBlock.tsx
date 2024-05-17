import React, { FC } from 'react';
import TitleBlockstyle from './TitleBlock.module.scss';


type propsType = {
    title: string,
    subTitle: string,

};

export const TitleBlock: FC<propsType> = (props) => {

    return <div className={TitleBlockstyle.titleBlock}>
        <div className={[TitleBlockstyle.titleBlock__container, 'container'].join(' ')}>
            <div className={TitleBlockstyle.titleBlock__body}>
                <h2 className={TitleBlockstyle.title}>
                    {'let`s go'}
                </h2>
                <p className={TitleBlockstyle.subTitle}>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vivamus lacinia odio vitae vestibumlum vestibulum.'}</p>
            </div>


        </div>



    </div>;

};