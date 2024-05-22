
import { memo } from 'react';
import style from './Footer.module.scss';
import { Links } from './Links/Links.jsx';







export const Footer = memo((props) => {
    return <footer data-aos="zoom-in" data-aos-delay="600"  className={style.footer}>
        <div className={[style.footer__container, 'container'].join(' ')}>

            <div className={[style.footer__body,].join(' ')}>
                <div className={[style.footer__items,].join(' ')}>
                    <div className={[style.footer__item, style.item, style.item_left,].join(' ')}>
                        <div className={style.item_left__body}>
                            <div className={[style.item_left__title, style.title].join(' ')}>
                                <p>Title Here</p>

                            </div>
                            <div className={style.item_left__text}>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi praesentium dolor doloribus eligendi exercitationem sint, distinctio sequi atque blanditiis odio aspernatur cum ad neque veniam? Quae doloribus praesentium sapiente?</p>
                            </div>
                            <Links />
                        </div>

                    </div>
                    <div className={[style.footer__item, style.item_right].join(' ')}>

                        <div className={style.item_right__body}>
                            <div className={[style.item_right__items].join(' ')}>
                                <div className={[style.item_right__list_block, style.list_block].join(' ')}>
                                    <div className={[style.list_block__body].join(' ')}>
                                        <div className={[style.list_block__title,style.title].join(' ')}>
                                            <p>
                                                About
                                            </p>

                                        </div>
                                        <div className={[style.list_block__list].join(' ')}>
                                            <ul>
                                                <li>History</li>
                                                <li>Our Team</li>
                                                <li>Brand Guidelines</li>
                                                <li>Terms & Condition</li>
                                                <li>Privacy Policy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={[style.item_right__list_block, style.list_block].join(' ')}>
                                    <div className={[style.list_block__body].join(' ')}>
                                        <div className={[style.list_block__title,style.title].join(' ')}>
                                            <p>
                                                About
                                            </p>

                                        </div>
                                        <div className={[style.list_block__list].join(' ')}>
                                            <ul>
                                                <li>History</li>
                                                <li>Our Team</li>
                                                <li>Brand Guidelines</li>
                                                <li>Terms & Condition</li>
                                                <li>Privacy Policy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={[style.item_right__list_block, style.list_block].join(' ')}>
                                    <div className={[style.list_block__body].join(' ')}>
                                        <div className={[style.list_block__title,style.title].join(' ')}>
                                            <p>
                                                About
                                            </p>

                                        </div>
                                        <div className={[style.list_block__list].join(' ')}>
                                            <ul>
                                                <li>History</li>
                                                <li>Our Team</li>
                                                <li>Brand Guidelines</li>
                                                <li>Terms & Condition</li>
                                                <li>Privacy Policy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>




                </div>

            </div>



        </div>
    </footer>
});

