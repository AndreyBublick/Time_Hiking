import { DispatchType } from "./redux-store";

const TOGGLE_ACTIVE_MODE = 'TOGGLE_ACTIVE_MODE';
const SET_TEXT_SEARTH_CONTENT = 'SET_TEXT_SEARTH_CONTENT';
const SET_DARK_THEME = 'SET_DARK_THEME';



let initialState = {
    isActive: false,
    textSearthContent: '',
    isDarkTheme:false,
};




type initialStateType = typeof initialState;

const headerReducer = (state = initialState, action: HeaderAcsType): initialStateType => {

    switch (action.type) {
        case TOGGLE_ACTIVE_MODE: {
            let stateCopy = { ...state, isActive: action.isActive, };


            return stateCopy;
        }
        case SET_TEXT_SEARTH_CONTENT: {
            let stateCopy = {...state, textSearthContent:action.textSearth,};
            return stateCopy;
        }
        case SET_DARK_THEME: {
            let stateCopy = {...state, isDarkTheme:action.isDarkTheme};
            return stateCopy;
        }
        default:
            return state;
    }
};


export const HeaderACs = {
    toggleActiveModeAC:(isActive: boolean) => {

        return { type: TOGGLE_ACTIVE_MODE, isActive } as const;
    },
    setTextSearthContentAC : (textSearth: string) => {
        return { type: SET_TEXT_SEARTH_CONTENT, textSearth } as const;
    },
    setDarkThemeAC : (isDarkTheme:boolean)=>{
        return {type:SET_DARK_THEME, isDarkTheme} as const
        } ,

 };

type HeaderAcsType = DispatchType<typeof HeaderACs>;



/* export const toggleActiveModeAC = (isActive: boolean): toggleActiveModeACType => {

    return { type: TOGGLE_ACTIVE_MODE, isActive };
};
export type toggleActiveModeACType = {
    type: typeof TOGGLE_ACTIVE_MODE,
    isActive: boolean,
};


export const setTextSearthContentAC = (textSearth: string): setTextSearthContentACType => {
    return { type: SET_TEXT_SEARTH_CONTENT, textSearth };
};

export type setTextSearthContentACType = {
    type: typeof SET_TEXT_SEARTH_CONTENT,
    textSearth: string,
};

export const setDarkThemeAC = (isDarkTheme:boolean):setDarkThemeACtype=>{
return {type:SET_DARK_THEME, isDarkTheme}
};

type setDarkThemeACtype = {
    type:typeof SET_DARK_THEME,
    isDarkTheme:boolean,
}; */





export default headerReducer;
