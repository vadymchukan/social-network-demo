import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const widthAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render (){
            if (!this.props.isAuth) return <Navigate to='/login' />
            return <Component {...this.props}/>
        }
    }

    let ConecctedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);    
    return ConecctedAuthRedirectComponent;
}