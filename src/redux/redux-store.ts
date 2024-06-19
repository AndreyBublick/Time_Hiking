
import { applyMiddleware, combineReducers,compose,createStore } from "redux";


import headerReducer from "./header-reducer.ts";
import { thunk } from "redux-thunk";
import featuresReducer from "./features-reducer.ts";
import brieflyAboutTheMainThingReducer from "./brieflyAboutTheMainThing-reducer.ts";
import { MountainHeaderReduce } from "./mountainHeader-reducer.ts";
import {Conditions} from "./Conditions-reduce.ts";
import { configureStore } from "@reduxjs/toolkit";





let RootReducer = combineReducers({
    header: headerReducer,
    features:featuresReducer,
    brieflyAboutTheMainThing:brieflyAboutTheMainThingReducer,
    mountainHeader:MountainHeaderReduce,
    conditions:Conditions,
});

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));


type reducersType = typeof RootReducer;




export type StateType = ReturnType<reducersType>;





export type DispatchType<T extends {[key:string]:(...args:any[])=>object}> = T extends {[key:string]:(...args:any[])=>infer R} ? R : null;

export default store;



