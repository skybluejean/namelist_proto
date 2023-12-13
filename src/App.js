import React from 'react';
import InputBox from "./client/InputBox.js";
//import React, { Component } from "react";
import Card from './client/Card.js';
import RnDButtons from './client/ButtonForR&D.js';
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