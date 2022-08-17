import React from "react";
import Profile from "./Profile";

import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
//import { useParams } from 'react-router-dom'; 
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


import { compose } from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

    refreshProfile (){
        let userId = this.props.router.params.userId;
        if (!userId) {
            // userId = this.props.authorizedUserId;
            // // if (!userId){
            // //     this.props.history.push("/login")
            // // }
            userId = 24579
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevStatus, snapshot) {
        if (this.props.router.params.userId != prevProps){
            this.refreshProfile();
        }
        
    }
    

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status ={this.props.status} 
                updateStatus = {this.props.updateStatus}
                isOwner={!this.props.router.params.userId}
                // Mozliwosc zmiany foto
                savePhoto = {this.props.savePhoto}/>
        )
    }
}


// = (props) =>{
//     if (!this.props.isAuth) return <Navigate to='/login' />
//     return <ProfileContainer {...props}/>
// }
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose(
    connect(mapStateToProps, { getUserProfile,  getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    // widthAuthRedirect
)(ProfileContainer);



