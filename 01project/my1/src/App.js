 import React from 'react';
import './App.css';
import Header from './componenta/Header';
import NavBar from './componenta/NavBar';


const App = () => {
  return (
    <div className='app-wrapper'>
<Header/>
<NavBar/>
  <div className='content'>
    <div>
 <img src='https://komandirovka.ru/upload/iblock/a42/a426f0dea1d58256260cc50f4088c84c.jpg'/>
  </div>
  <div>
    ava+description
  </div>
  <div>
    <div>
    my posts
    </div>
    <div>
      new post
    </div>
    </div>
    <div>
      <div>
      post1
    </div>
    <div>
      post2
    </div>
  </div>
  </div>


</div>
  )
}

 

export default App;
