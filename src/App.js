import React from 'react';
import InputBox from "./components/InputBox.js";
//import React, { Component } from "react";
import Card from './components/Card.js';

const App = () => {
  return (
    <div className='main-Container'>
      <Card />
      <InputBox/>
    </div>
  );
};

export default App;