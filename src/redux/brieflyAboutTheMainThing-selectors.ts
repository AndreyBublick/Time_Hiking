import { StateType } from "./redux-store";





export const getCardsData = (state:StateType)=>{
return state.brieflyAboutTheMainThing.cards;
};