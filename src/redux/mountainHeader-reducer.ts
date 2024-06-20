

const ADD_NEW_IMAGES = 'ADD_NEW_IMAGES';




const initiaState = {

};


/* const AC = {
    addNewImages: (images: any) => {
        return { type: ADD_NEW_IMAGES, images, } as const;
    },
}; */


export const MountainHeaderReduce = (state = initiaState, action:any) => {

    switch (action.type) {
        case 1: {

            let stateCopy = { ...state };

            return stateCopy;
        }



        default: {
            
            return state;
        };

    }



};


