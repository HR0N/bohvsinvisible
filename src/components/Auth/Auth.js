import React, {useState} from "react";
import "./Auth.scss";
import {connect} from 'react-redux';
import Login from "./Login/Login";
import Registration from "./Registration/Registration";


function Auth() {
    const [login_toggle, set_login_toggle] = useState(true);

    return(<div className={`Auth`}>
        {login_toggle ? <Login set_login_toggle={set_login_toggle}/> : <Registration set_login_toggle={set_login_toggle}/>}
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
export default connect(mapStateToProps, mapDispatchProps)(Auth);