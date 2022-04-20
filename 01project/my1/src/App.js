import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './componenta/NavBar/Dialogs/Dialogs/Dialogs';
import Header from "./componenta/Header/Header.jsx";
import NavBar from "./componenta/NavBar/NavBar.jsx";
import Profile from "./componenta/Profile/Profile.jsx";
import News from './componenta/NavBar/News/News';
import Settings from './componenta/NavBar/Settings/Settings';




const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
