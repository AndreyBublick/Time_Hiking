
import HeaderStyles from './Header.module.scss';
import logo from '../../content/images/Place Your Logo Here (Double Click to Edit).png';
import logoDark from '../../content//images/logoDark.png';
import { useEffect, useState } from 'react';
import { Theme } from './Theme/Theme';
import { getIsDarkTheme } from '../../redux/header-selectors.ts';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../App.js';
import { ConditionsAC } from '../../redux/Conditions-reduce.ts';
import { getisNotCloseBody } from '../../redux/Conditions-selectors.ts';







export const Header = (props) => {

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
    }, [window.innerWidth,window.innerHeight]);
   
    





    const scrollStartPage = () => {
        navigate('/home');
        

        scrollToTop();


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

        dispatch(ConditionsAC.toggleCloseBody(!isNotCloseBody));
        props.toggleActiveMode(!props.isActive);

        const body = document.querySelector('body');
        body.classList.toggle('_block');


    };



    const newStyle = isDarkTheme ? HeaderStyles._Dark : '';



    return <header style={!isNotCloseBody ? {paddingRight:`${props.widthScrollBar}px`}:{paddingRight:`${0}px`}} /* style={ isNotCloseBody ? {paddingRight:`${0}px`}:{paddingRight:`${props.widthScrollBar}px`} } */ className={isHeaderLess ? [HeaderStyles.header, HeaderStyles._less, newStyle].join(' ') : [HeaderStyles.header, newStyle].join(' ')}>
        <div className={HeaderStyles.header__container}>
            <div className={HeaderStyles.header__body}>
                <div className={HeaderStyles.header__logo}> <img onClick={scrollStartPage} src={isDarkTheme ? logoDark:logo} alt="imageLogo" /></div>



                {isChangePositionTheme && <Theme />}
                <div onClick={onClickBurger} className={props.isActive ? HeaderStyles.header__burger + ' ' + HeaderStyles._active : HeaderStyles.header__burger}><span></span></div>
                <div className={props.isActive ? HeaderStyles.header__menu + ' ' + HeaderStyles.menu + ' ' + HeaderStyles._active : HeaderStyles.header__menu + ' ' + HeaderStyles.menu}>
                    <ul className={HeaderStyles.menu__list}>




                        {!isChangePositionTheme && <Theme />}





                       {/*  <li><NavLink onClick={scrollStartPage} to="/home" className={HeaderStyles.menu__link}><span>home</span></NavLink></li> */}

                        <NavigateNavLink  link={"/home"} text={'home'} />
                        <NavigateNavLink  link={"/menu"} text={'menu'} />
                        <NavigateNavLink  link={"/story"} text={'our story'} />
                        <NavigateNavLink  link={"/contacts"} text={'contact us'} />
                    
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


const NavigateNavLink = (props)=>{
return <li>
    <NavLink onClick={scrollToTop} to={props.link} className={HeaderStyles.menu__link}><span>{props.text}</span></NavLink>
    </li>

};
export default Header;