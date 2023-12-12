import React from 'react';
import InputBox from "./components/InputBox.js";
//import React, { Component } from "react";
import Card from './components/Card.js';

const App = () => {
  return (
    <div className='main-Container'>
      <div className='main-Container-CardList'>
      <Card />
      </div>
      <div className='main-Container-InputBox'>
      <InputBox/>
      </div>
    </div>
  );
};

export default App;