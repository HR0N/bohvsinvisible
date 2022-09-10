import React, {useEffect, useState} from "react";
import "./Popup.scss";
import {connect} from 'react-redux';
import Body_toggle from "./body";

const body = new Body_toggle();

function BigPopup(props) {
    const [popupOpen, setPopupOpen] = useState(props.status);
    useEffect(()=>{setPopupOpen(props.status)}, [props.status]);

    // toggle body scroll by toggle popup
    if(popupOpen){body.hidden()}
    else{body.visible()}

    // close timer
    const timer_close = (timeout)=>{
        setTimeout(()=>{closePopup()}, timeout)
    };
    if(props.timeout){timer_close(props.timeout);}

    const closePopup = ()=>{
        if(props.callbackClose){props.callbackClose()}
    };

    return(<div className={`BigPopup popup ${popupOpen ? 'popup-open' : ''}`}
    onClick={(e)=>{
        // check is click on body, yes = close popup
        if(e.target.classList.contains('popup__body')){closePopup();}
    }}
    >
        <div className="popup__body">
            <div className="popup__content">

                {props.title ? <div className="popup__title">{props.title}</div> : false}
                {props.text ? <div className="popup__text">{props.text}</div> : false}

                <div className="popup__close"
                onClick={()=>{closePopup()}}
                >X</div>
            </div>
        </div>
    </div>);
}


function mapStateToProps(state){
    return {
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(BigPopup);