import { DispatchType } from './redux-store';


const TOGGLE_CLOSE_BODY = 'TOGGLE_CLOSE_BODY';



let initialState = {

    parametrs:{
        isNotCloseBody:true,
    },
    

};

type initialStateType = typeof initialState; 



export const ConditionsAC = {

    toggleCloseBody:(isNotCloseBody:boolean)=>{
        return {type:TOGGLE_CLOSE_BODY,isNotCloseBody:isNotCloseBody,} as const
    },
   

};



export const Conditions = (state = initialState, action:ACSType ):initialStateType => {

    switch (action.type) {
        case TOGGLE_CLOSE_BODY:
            let stateCopy = { ...state };

            stateCopy.parametrs = {...state.parametrs,isNotCloseBody:action.isNotCloseBody};
            

            return stateCopy;

        default:
            return state;
    }


};


type ACSType = DispatchType<typeof ConditionsAC>;




