




let initialState = {

    cards: [
        {id:1,
           
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
        },
        {id:2,
           
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
        },
        {id:3,
           
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
        },
        
      
       
],

};




const brieflyAboutTheMainThingReducer = (state = initialState, action: any):typeof initialState => {

    switch (action.type) {
        case 1:
            let stateCopy = { ...state };
            return stateCopy;

        default:
            return state;
    }


};

export default brieflyAboutTheMainThingReducer;
