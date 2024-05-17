
import img1 from '../content/images/Features/Place_Your_Design_Here_1.png'; 
import img2 from '../content/images/Features//Place_Your_Design_Here_2.png'; 
import img3 from '../content/images/Features/Place_Your_Image Here_3.png'; 


let initialState = {

    cards: [
        {id:1,
            image: img1,
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        },
        {id:2,
            image: img2,
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        },
        {id:3,
            image: img3,
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        },
        {id:4,
            image: img1,
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        },
        {id:5,
            image: img2,
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        },
        {id:6,
            image: img3,
            cardTitle: 'Lorem ipsum',
            cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        },
       
],

};




const featuresReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 1:
            let stateCopy = { ...state };
            return stateCopy;

        default:
            return state;
    }


};

export default featuresReducer;
