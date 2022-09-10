import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './mediaqueries.scss'
import './variables.scss'
import './fonts/fonts.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/rootReducer';
import './services/localization';
import Loader from "./UXExtra/Loader/Loader";
import 'h-bootstrap/h-boobstrap.css';


const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
document.title = 'War Tears';
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<Loader/>}> {/*for i18next (localization)*/}
                    <App/>
                </Suspense>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
export {store};



reportWebVitals();
