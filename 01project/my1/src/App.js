import React from 'react';
import './App.css';
import Header from "./componenta/Header.jsx"
import NavBar from "./componenta/NavBar.jsx"
import  Profile  from "./componenta/Profile.jsx"




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
