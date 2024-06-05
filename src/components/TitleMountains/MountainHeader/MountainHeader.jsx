import React, { FC } from 'react';
import style from './MountainHeader.module.scss';


import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from 'react-redux';
import { getIsDarkTheme } from '../../../redux/header-selectors.ts';





export const MountainHeader = ({ Child, images, ...props }) => {

    const isDarkTheme = useSelector(getIsDarkTheme);


    return <div className={[isDarkTheme?style._Dark:'',style.mountainHeader].join(' ')}>
       
        <div className={[style.title_mountains, style.mountainHeader__title].join(' ')}>
        {images && <ImageGallery isRTL={true}  slideOnThumbnailOver={true} lazyLoad={true} showNav={false} showThumbnails={false} useBrowserFullscreen={false} showFullscreenButton={false} showPlayButton={false}
         slideInterval={10000} slideDuration={2000} autoPlay={true} additionalClass={style.title_mountains__image_gallery}  items={images} />} 

            <div className={style.title_mountains__body}>
                <div className={style.title_mountains__container}>
                    <div className={[style.title_mountains__content, style.content].join(' ')}>
                        <div className={style.content__body}>
                            <div data-aos-anchor-placement='top-bottom' data-aos="zoom-in-down" data-aos-delay="350" className={style.content__title}>
                                <p>Hiking in the mountains</p>
                            </div>
                            <div data-aos-anchor-placement='top-bottom' data-aos="fade-up" data-aos-delay="400" className={style.content__sub_title}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam quis
                                </p>
                            </div>
                            {Child && <Child placeHolder={'Your Email'} />}
                            <div><img src={images} alt="" /></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    </div>



};