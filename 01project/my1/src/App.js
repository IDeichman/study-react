import React from 'react';
import './App.css';
import Header from './componenta/Header';
import NavBar from './componenta/NavBar';
import Profile from './componenta/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
<Header/>
<NavBar/>
<Profile/>
</div>
  )
}

 

export default App;
