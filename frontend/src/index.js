import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Main from './pages/Main';
import FetchAPI from './API/FetchAPI';
import CreateAccount from './pages/CreateAccount';
import Profile from './pages/Profile';
import Creator from './pages/Creator';
import NoPage from './pages/NoPage';

import reportWebVitals from './reportWebVitals';


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="fetch-api" element={<FetchAPI/>}/>
          <Route path="create-account" element={<CreateAccount/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="creator" element={<Creator/>}/>
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
