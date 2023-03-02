import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Office from './Office';

console.log('Версия React: ' + React.version);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/office' element={<Office/>}/>
    </Routes>
  </BrowserRouter>
);



