import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../units/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { Navigate} from "react-router-dom";
import styles from "../../components/common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
return (
    <form action="" onSubmit={props.handleSubmit}>
        <div>
         <Field type="text" placeholder="email" name="email" component={Input}
          validate = {[required]} />
        </div>
        <div>
         <Field type="password" placeholder="password" name="password" component={Input}
          validate = {[required]} />
        </div>
        <div>
         <Field  type="checkbox" component={Input} name="rememberMy"/>Remember my
        </div>
        { props.error && <div className={styles.formSummaryError}>
            {props.error}
            </div>}
        <div>
        <button>Login</button>
        </div>   
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMy);
    }
    if (props.isAuth){
        return <Navigate to='/profile' />
        
        // <Redirect to ={"/profile"}/>
    }
    return (
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } />
    </div>

        )
    }
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
