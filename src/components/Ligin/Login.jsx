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

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl &&   <Field type="text" placeholder="captcha" name="captcha" component={Input}
          validate = {[required]} />}

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
       props.login(formData.email, formData.password, formData.rememberMy, formData.captcha);
    }
    if (props.isAuth){
        return <Navigate to='/profile' />
        
        // <Redirect to ={"/profile"}/>
    }
    return (
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } captchaUrl={props.captchaUrl}/>
    </div>

        )
    }
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
