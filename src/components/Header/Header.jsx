
import HeaderStyles from './Header.module.scss';
import logo from '../../content/images/Place Your Logo Here (Double Click to Edit).png';
import logoDark from '../../content//images/logoDark.png';
import { useEffect, useState } from 'react';
import { Theme } from './Theme/Theme';
import { getIsDarkTheme } from '../../redux/header-selectors.ts';
import { useSelector } from 'react-redux';








export const Header = (props) => {


    const isDarkTheme = useSelector(getIsDarkTheme);
    const [isShowSearch, setIsShowSearch] = useState(true);
    const [isHeaderLess, setIsHeaderLess] = useState(false);
    const [isChangePositionTheme, setIsChangePositionTheme] = useState(false);


    const changePositionTheme = () => {
        if (window.innerWidth <= 767) {
            setIsChangePositionTheme(true);
        }
        else {
            setIsChangePositionTheme(false);

        }
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
    useEffect(() => {
        changePositionTheme();
    }, []);
    useEffect(() => {
        changePositionTheme();
    }, [window.innerWidth,window.innerHeight]);
   






    const scrollStartPage = () => {
        const scrollerElement = document.getElementById('start-page');
        scrollerElement.scrollIntoView({
            behavior: 'smooth',
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



    const newStyle = isDarkTheme ? HeaderStyles._Dark : '';



    return <header className={isHeaderLess ? [HeaderStyles.header, HeaderStyles._less, newStyle].join(' ') : [HeaderStyles.header, newStyle].join(' ')}>
        <div className={HeaderStyles.header__container}>
            <div className={HeaderStyles.header__body}>
                <div className={HeaderStyles.header__logo}> <img onClick={scrollStartPage} src={isDarkTheme ? logoDark:logo} alt="imageLogo" /></div>



                {isChangePositionTheme && <Theme />}
                <div onClick={onClickBurger} className={props.isActive ? HeaderStyles.header__burger + ' ' + HeaderStyles._active : HeaderStyles.header__burger}><span></span></div>
                <div className={props.isActive ? HeaderStyles.header__menu + ' ' + HeaderStyles.menu + ' ' + HeaderStyles._active : HeaderStyles.header__menu + ' ' + HeaderStyles.menu}>
                    <ul className={HeaderStyles.menu__list}>




                        {!isChangePositionTheme && <Theme />}





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