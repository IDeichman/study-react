import React from 'react';
import './App.css';
import Dialogs from './componenta/Dialogs/Dialogs';
import Header from "./componenta/Header/Header.jsx";
import NavBar from "./componenta/NavBar/NavBar.jsx";
import  Profile  from "./componenta/Profile/Profile.jsx";




const App = () => {
  return (
    <div className='app-wrapper'>
<Header />
<NavBar />
<div className='app-wrapper-content'>
<Dialogs />

{/*<Profile />*/}
</div>

</div>
  );
}

 

export default App;
