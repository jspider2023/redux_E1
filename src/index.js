import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Axios from './component/Axios';
import LyfeCycleInFunciton from './lifeCycleMethod/LyfeCycleInFunciton';
import Debouncing from './lifeCycleMethod/debouncing';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
 
   <Provider store={store}>
    {/* <App /> */}
     {/* <Axios/> */}
     {/* <LyfeCycleInFunciton/> */}
       {/* <Debouncing/> */}
       <App/>
   </Provider>
  
 
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
