
import HeaderStyles from './Header.module.scss';
import logo from '../../content/images/Place Your Logo Here (Double Click to Edit).png';
import { useEffect, useState } from 'react';



const Header = (props) => {
    
    const [isShowSearch, setIsShowSearch] = useState(true);
    const [isHeaderLess, setIsHeaderLess] = useState(false);

    const scrollStartPage = () => {
      const scrollerElement = document.getElementById('start-page');
      scrollerElement.scrollIntoView({
        behavior:'smooth',
      });
    };

    const onBlurEvent = (e) => {
        let textCeartch = e.target.value;
        props.setSearthActiveFalse(textCeartch);
        props.setSearthContentText(textCeartch);
    }
    const onInputEvent = (e) => {
        props.setTextSearthContent(e.target.value);
    }
    const onClickBurger = () => {


        props.toggleActiveMode(!props.isActive);

        const body = document.querySelector('body');
        body.classList.toggle('_block');


    };
    useEffect(() => {

        const checkViewport = () => {
            if (window.innerWidth < 768) {
                setIsShowSearch(false);
            }
            else {
                setIsShowSearch(true);
            }
        };
        checkViewport();
        window.addEventListener('resize', checkViewport);

        return () => {
            window.removeEventListener('resize', checkViewport);
        };

    }, []);
    useEffect(() => {

        if (window.innerWidth > 768) {
            const checkViewport = () => {

                if (window.scrollY === 0) {
                    setIsHeaderLess(false);
                }
                else {
                    setIsHeaderLess(true);
                }
            };
            checkViewport();
            window.addEventListener('scroll', checkViewport);

            return () => {
                window.removeEventListener('scroll', checkViewport);
            };
        }



    }, []);





    return <header  className={isHeaderLess ? [HeaderStyles.header, HeaderStyles._less].join(' ') : HeaderStyles.header}>
        <div className={HeaderStyles.header__container}>
            <div className={HeaderStyles.header__body}>
                <div className={HeaderStyles.header__logo}><img onClick={scrollStartPage} src={logo} alt="imageLogo" /></div>
                <div onClick={onClickBurger} className={props.isActive ? HeaderStyles.header__burger + ' ' + HeaderStyles._active : HeaderStyles.header__burger}><span></span></div>
                <div className={props.isActive ? HeaderStyles.header__menu + ' ' + HeaderStyles.menu + ' ' + HeaderStyles._active : HeaderStyles.header__menu + ' ' + HeaderStyles.menu}>
                    <ul className={HeaderStyles.menu__list}>
                        <li><a href="#" className={HeaderStyles.menu__link}><span>home</span></a></li>
                        <li><a href="#" className={HeaderStyles.menu__link}><span>menu</span></a></li>
                        <li><a href="#" className={HeaderStyles.menu__link}><span>our story</span></a></li>
                        <li><a href="#" className={HeaderStyles.menu__link}><span>contact us</span></a></li>
                        {isShowSearch && <li>
                            <div className={props.isSearthActive ? HeaderStyles.menu__searth + ' ' + HeaderStyles._active : HeaderStyles.menu__searth}>
                                <input onFocus={(e) => { props.setSearthActive(true) }} onBlur={onBlurEvent} onInput={onInputEvent} value={props.textContentSeartah} type="text" />
                            </div>
                        </li>}

                    </ul>
                </div>
            </div>
        </div>
    </header>;
};



export default Header;