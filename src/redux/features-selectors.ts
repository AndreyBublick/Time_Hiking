import { StateType } from './redux-store.ts';




export const getFeaturesCardsSelector = (state:StateType) =>{return state.features.cards};




/* let getFeaturesCardsSelector = createSelector([getFeaturesCards],(cards)=>{}); */

