import { applyMiddleware, combineReducers, createStore } from "redux";
import headerReducer from "./header-reducer.ts";
import { thunk } from "redux-thunk";
import featuresReducer from "./features-reducer.ts";
import brieflyAboutTheMainThingReducer from "./brieflyAboutTheMainThing-reducer.ts";






let RootReducer = combineReducers({
    header: headerReducer,
    features:featuresReducer,
    brieflyAboutTheMainThing:brieflyAboutTheMainThingReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

type reducersType = typeof RootReducer;

export type StateType = ReturnType<reducersType>;


export default store;