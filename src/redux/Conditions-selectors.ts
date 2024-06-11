import { StateType } from "./redux-store";





export const getisNotCloseBody = (state:StateType)=>{
    return state.conditions.parametrs.isNotCloseBody;
};