import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const widthSuspense = (Component) => {
    return (props)=>{
        return <Suspense fallback={<Preloader/>}>
       <Component {...props}/>
      </Suspense>  
    }

}