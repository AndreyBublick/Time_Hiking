import { compose } from "redux";
import Header from "./Header.jsx";
import { setTextSearthContentAC, setTextSearthContentACType, toggleActiveModeAC, toggleActiveModeACType } from "../../redux/header-reducer.ts";
import { connect } from "react-redux";
import { FC, useState } from "react";
import React from "react";
import { StateType } from "../../redux/redux-store.ts";




type propsType = {
    isActive:boolean,
    textSearthContent:string, 
    toggleActiveModeAC:(isActive:boolean) => toggleActiveModeACType, 
    setTextSearthContentAC:(textSearth:string)=> setTextSearthContentACType;
    widthScrollBar:number,

};

type mapStateToPropsType = {
    isActive:boolean,
    textSearthContent:string, 
    
};
type mapDispatchToPropsType = {
    toggleActiveModeAC:(isActive:boolean) => toggleActiveModeACType, 
    setTextSearthContentAC:(textSearth:string)=> setTextSearthContentACType;
    };
type ownType = {};


const HeaderContainer:FC<propsType> = (props) => {
    
    
    let [isSearthActive, setSearthActive] = useState(false);
    let [textSearthContent, setTextSearthContent] = useState(props.textSearthContent);

    const setSearthActiveFalse = (text:string) => {
        if (!(text.length > 0)) {
            setSearthActive(false);

        }
    };
    



    return <Header widthScrollBar={props.widthScrollBar} textSearthContent={textSearthContent} setTextSearthContent={setTextSearthContent}
     setSearthActiveFalse={setSearthActiveFalse} isSearthActive={isSearthActive} setSearthActive={setSearthActive}
      isActive={props.isActive} toggleActiveMode={props.toggleActiveModeAC}  setSearthContentText={props.setTextSearthContentAC} />;

};


let mapStateToProps = (state:any) => {
    return {
        isActive: state.header.isActive,
        textSearthContent:state.header.textSearthContent,
    };
};

export default compose(connect<mapStateToPropsType,mapDispatchToPropsType,ownType,StateType>(mapStateToProps, { toggleActiveModeAC,setTextSearthContentAC,}))(HeaderContainer);