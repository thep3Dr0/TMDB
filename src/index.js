import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './state/store';


//api_key  =  e5446f8ec2508e09e1bbbbba89df1cf7

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />}/>
            <Route path='*' element={<h1>404 Not Found</h1>}/>
          </Routes>   
        </BrowserRouter>
      </Provider>
    </main>
);

reportWebVitals();
