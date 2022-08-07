import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.css';

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Ligin/Login";
import Navbar from "./components/Navbar/Navbar";

import UsersContainer from "./components/Users/UsersContainer";
import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";

import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


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
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // Lazy-loaded
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); // Lazy-loaded


class App extends Component {

    componentDidMount() {
    this.props.initializeApp();
}

  render(){

if (this.props.initialized){
  return <Preloader/>
}

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/profile/" element={
          
          <Suspense fallback={<Preloader/>}>
                <ProfileContainer />
              </Suspense>
          } />
          
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          {/* Na tym etapie on robi hok withSuspens i czerez niego robi to co nizej ja tez mam ten hok ale jego nie urzywam */}
          <Route path='/dialogs/*' element={ 
                <Suspense fallback={<Preloader/>}>
                <DialogsContainer />
              </Suspense>
          } />
          <Route path='/users/*' element={<UsersContainer />} />
          <Route path='/Login/' element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
  })

let AppContainer =  compose(
  withRouter,
  connect (mapStateToProps, {initializeApp}))(App)

let SamurajJsApp = (props) =>{
  return  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
}
export default SamurajJsApp
