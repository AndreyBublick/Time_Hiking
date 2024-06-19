


import { APairBlock } from './APairBlock/APairBlock.tsx';
import  style from './TwoPartBlocks.module.scss';
import image from '../../content/images/APairBlocks/Gradient Map_.png';
import image2 from '../../content/images/APairBlocks/Gradient Map2_.png';
import React from 'react';


export const TwoPartBlocks = () => {
    


    return <section className={style.two_art_blocks}>
        <div className={style.two_art_blocks__body}>
           <APairBlock image={image} textTitle={'Discount up to 50% All Excursions'} textBody={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '} />
           <APairBlock image={image2} textTitle={'January’s Promo: Buy 1 Get 1 Free!'} textBody={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'} />
           
        </div>

    </section >
};