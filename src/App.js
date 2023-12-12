import React from 'react';
import InputBox from "./components/InputBox.js";
//import React, { Component } from "react";
import Card from './components/Card.js';
import RnDButtons from './components/ButtonForR&D.js';
//import './MainBoxContainer.css'

const App = () => {
  return (
    <div className='main-Container'>
      <div className='main-Container-CardList'>
      <Card />
      </div>
      <div className='main-Container-InputBox'>
      <InputBox/>
      <RnDButtons/>
      </div>
    </div>
  );
};

export default App;