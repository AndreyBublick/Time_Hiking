



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSun as faSunSOLID } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonSOLID } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getIsDarkTheme } from '../../../redux/header-selectors.ts'; ///
import { HeaderACs } from '../../../redux/header-reducer.ts'; ////
import React, { useEffect } from 'react';



export const Theme = () => {
    const isDarkTheme = useSelector(getIsDarkTheme);

 


    useEffect(() => {
        const value = window.localStorage.getItem('IS_DARK_THEME');

if(value){
    dispatch(HeaderACs.setDarkThemeAC(JSON.parse(value)));
}

       
    }, []);



    const styleFontIcon = {
        zIndex: '10',
        color: 'black',
        cursor: 'pointer',
        /*  transform:'scale(1)',
         transition: '0.5s all', */


    };
    const whiteStyle = {
        color: 'white',
    };
    const changeThemeOnDark = () => {
        window.localStorage.setItem('IS_DARK_THEME',JSON.stringify(true));
        dispatch(HeaderACs.setDarkThemeAC(true));
    };
    const changeThemeOnWhite = () => {
        window.localStorage.setItem('IS_DARK_THEME',JSON.stringify(false));
        dispatch(HeaderACs.setDarkThemeAC(false));
    };



    const dispatch = useDispatch();



    return <>
        {isDarkTheme ? <FontAwesomeIcon style={isDarkTheme ? { ...styleFontIcon, ...whiteStyle } : styleFontIcon} onClick={changeThemeOnWhite} size='3x' icon={faSunSOLID} /> :
            <FontAwesomeIcon style={styleFontIcon} onClick={changeThemeOnDark} size='3x' icon={faMoonSOLID} />}
    </>
};