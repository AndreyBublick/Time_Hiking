
import HeaderStyles from './Header.module.scss';
import logo from '../../content/images/Place Your Logo Here (Double Click to Edit).png';
import logoDark from '../../content//images/logoDark.png';
import React, { FC, useEffect, useState } from 'react';
import { Theme } from './Theme/Theme.tsx';
import { getIsDarkTheme } from '../../redux/header-selectors.ts';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../App.tsx';
import { ConditionsAC } from '../../redux/Conditions-reduce.ts';
import { getisNotCloseBody } from '../../redux/Conditions-selectors.ts';






type propsType = {
    widthScrollBar: number,
};

export const Header: FC<propsType> = (props) => {



    let [isSearthActive, setSearthActive] = useState(false);
    let [textSearthContent, setTextSearthContent] = useState('');
    const [toggleActiveMode, setToggleActiveMode] = useState(false);



    const setSearthActiveFalse = (text: string) => {
        if (!(text.length > 0)) {
            setSearthActive(false);

        }
    };
    ////////////// /// ... .... ////







    const isNotCloseBody = useSelector(getisNotCloseBody);
    const dispatch = useDispatch();

    const isDarkTheme = useSelector(getIsDarkTheme);
    const [isShowSearch, setIsShowSearch] = useState(true);
    const [isHeaderLess, setIsHeaderLess] = useState(false);
    const [isChangePositionTheme, setIsChangePositionTheme] = useState(false);
    const navigate = useNavigate();

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
    }, [window.innerWidth, window.innerHeight]);







    const scrollStartPage = () => {
        navigate('/home');


        scrollToTop();


    };
    const onBlurEvent = (e: React.FocusEvent<HTMLInputElement>) => {
        let textCeartch = e.target.value;
        setSearthActiveFalse(textCeartch);
        setTextSearthContent(textCeartch);
    }
    const onInputEvent = (e: React.FocusEvent<HTMLInputElement>) => {
        setTextSearthContent(e.target.value);
    }



    const toggleBlockBody = ()=>{
        const body = document.querySelector('body');
        body?.classList.toggle('_block');
        dispatch(ConditionsAC.toggleCloseBody(!isNotCloseBody));
        setToggleActiveMode(!toggleActiveMode);
    };
   

    const onClickBurger = () => {
        

        toggleBlockBody();


    };
    const onClickLink = () => {
        if (window.innerWidth < 768) {
            toggleBlockBody();
        }
    };





    const newStyle = isDarkTheme ? HeaderStyles._Dark : '';



    return <header style={!isNotCloseBody ? { paddingRight: `${props.widthScrollBar}px` } : { paddingRight: `${0}px` }} /* style={ isNotCloseBody ? {paddingRight:`${0}px`}:{paddingRight:`${props.widthScrollBar}px`} } */ className={isHeaderLess ? [HeaderStyles.header, HeaderStyles._less, newStyle].join(' ') : [HeaderStyles.header, newStyle].join(' ')}>
        <div className={HeaderStyles.header__container}>
            <div className={HeaderStyles.header__body}>
                <div className={HeaderStyles.header__logo}> <img onClick={scrollStartPage} src={isDarkTheme ? logoDark : logo} alt="imageLogo" /></div>



                {isChangePositionTheme && <Theme />}
                <div onClick={onClickBurger} className={toggleActiveMode ? HeaderStyles.header__burger + ' ' + HeaderStyles._active : HeaderStyles.header__burger}><span></span></div>
                <div className={toggleActiveMode ? HeaderStyles.header__menu + ' ' + HeaderStyles.menu + ' ' + HeaderStyles._active : HeaderStyles.header__menu + ' ' + HeaderStyles.menu}>
                    <ul className={HeaderStyles.menu__list}>

                        {!isChangePositionTheme && <Theme />}

                        <NavigateNavLink onClick={onClickLink} link={"/home"} text={'home'} />
                        <NavigateNavLink onClick={onClickLink} link={"/menu"} text={'menu'} />
                        <NavigateNavLink onClick={onClickLink} link={"/story"} text={'our story'} />
                        <NavigateNavLink onClick={onClickLink} link={"/contacts"} text={'contact us'} />

                        {isShowSearch && <li>
                            <div className={isSearthActive ? HeaderStyles.menu__searth + ' ' + HeaderStyles._active : HeaderStyles.menu__searth}>
                                <input onFocus={(e) => { setSearthActive(true) }} onBlur={onBlurEvent} onInput={onInputEvent} value={textSearthContent} type="text" />
                            </div>
                        </li>}

                    </ul>
                </div>
            </div>
        </div>
    </header>;
};


type NavigateNavLinkPropsType = {
    link: string,
    text: string,
    onClick: () => void,
};

const NavigateNavLink: FC<NavigateNavLinkPropsType> = (props) => {
    return <li>
        <NavLink onClick={(e) => { props.onClick(); scrollToTop(); }} to={props.link} className={HeaderStyles.menu__link}><span>{props.text}</span></NavLink>
    </li>

};
export default Header;