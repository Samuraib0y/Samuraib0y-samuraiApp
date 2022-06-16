import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/store";
import {Provider} from "react-redux";
import SamuraiApp from "./App";





    ReactDOM.render(
        <SamuraiApp/>,
        document.getElementById('root')
    );

