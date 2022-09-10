import React from "react";
import "./Footer.scss";
import {connect} from 'react-redux';


function Footer() {
    return(<div className={`Footer`}></div>);
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
export default connect(mapStateToProps, mapDispatchProps)(Footer);