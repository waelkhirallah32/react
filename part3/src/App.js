import React from 'react';
import Adress from './Profile/Adress';
import Fullname from './Profile/Fullname';
import Photo from './Profile/Photo';
import Wael from './img/Wael.jpg';

import './App.css';






function App() {
  return (
    <div className="App">
     <Adress adress="adresse" />
     <Fullname name="name"/>
     <img src={Wael}  alt="KHIRALLAH"/>
    </div>
  );
}

export default App;
