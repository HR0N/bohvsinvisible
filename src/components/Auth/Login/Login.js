import React, {useState} from "react";
import "./Login.scss";
import {connect}      from 'react-redux';
import InputClass     from "../../../sublimate/input";
import ValidatorClass from "../../../sublimate/validator";
import ApiClient      from "../../../services/api";
import BigPopup       from "../../../sublimate/popup/BigPopup";
import Errors from "../../../sublimate/errors";

const input     = new InputClass();
const validate  = new ValidatorClass();
const apiClient = new ApiClient();
const errors    = new Errors();




function Login(props) {
    const [authError, setAuthError] = useState(false);

    const logEmail = input.init("");
    const logPass  = input.init("");

    const fully_validate = ()=>{
        return(validate.isEmail(logEmail.val)
            && validate.isLength(logPass.val, 8, 33)
            && validate.isAlphanumeric(logPass.val))
    };

    const login = () => {
            if(fully_validate()){//                                                          check all valid
            let data = {
                email: validate.escape(validate.trim(logEmail.val)),
                pass:  validate.escape(validate.trim(logPass.val)),
            };
                apiClient.login(//                                                           call apiClient service
                data,//                                                                      prop 1 > data
                (error)=>{if(error) setAuthError(error.response.status);},//     prop 2 > callback if(error)
                (response)=>{console.log(response);}//                         prop 3 > callback if(success)
                );
        }
    };

    return(<div className={`Login`}>
        <BigPopup
            status={authError ? true : 0}
            title={authError ? errors.errors[authError].title : false}
            text={authError ? errors.errors[authError].message : false}
            callbackClose={()=>{setAuthError(false)}}
        />

        <div className="auth-form login-form">
            <h3>Login form</h3>
            <form className={`form-group`}>
                <label><span className={`validate_error`}>{logEmail.touched ? validate.isEmailMsg(logEmail.val)
                    : false}</span>
                    <input onChange={(e)=>{logEmail.onChange(e)}}
                           value={logEmail.val}
                           onBlur={(e)=>{logEmail.onBlur(e)}}
                           className={`form-control`} type="email" placeholder={`   email`} name={`email`}/>
                </label>
                <label><span className={`validate_error`}>{logPass.touched ? validate.isLengthMsg(logPass.val, 8, 33)
                    : false}</span>
                    <input onChange={(e)=>{logPass.onChange(e)}}
                           value={logPass.val}
                           onBlur={(e)=>{logPass.onBlur(e)}}
                           className={`form-control`} type="password" placeholder={`   password`} name={`pass`}/>
                </label>
            </form>
            <div className="toggle-form">
                <div className="buttons">
                    <div className={`btn auth-form__button auth-form__toggle_form`}
                    onClick={()=>{props.set_login_toggle(false)}}
                    >Register</div>
                    <div className={`btn btn-info auth-form__button auth-form__login`}
                    onClick={()=>{
                        login();
                    }}
                    >Login</div>
                </div>
            </div>
        </div>
    </div>);
}


function mapStateToProps(state){
    return {
        prop: state.app.prop,
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Login);