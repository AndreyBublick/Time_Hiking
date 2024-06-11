

const TOGGLE_CLOSE_BODY = 'TOGGLE_CLOSE_BODY';



let initialState = {

    parametrs:{
        isNotCloseBody:true,
    },
    

};


export const ConditionsAC = {

    toggleCloseBody:(isNotCloseBody:boolean)=>{
        return {type:TOGGLE_CLOSE_BODY,isNotCloseBody:isNotCloseBody,} as const
    },

};



const Conditions = (state = initialState, action: any) => {

    switch (action.type) {
        case TOGGLE_CLOSE_BODY:
            let stateCopy = { ...state };

            stateCopy.parametrs = {...state.parametrs,isNotCloseBody:action.isNotCloseBody};
            

            return stateCopy;

        default:
            return state;
    }


};

export default Conditions;
