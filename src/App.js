import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nearteam from './Components/FirstFile';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

const MyComponent=(props)=> {
  console.log('props',props)
  return (
    <div className="App">
        <Header props={props}/>
        <Body firstName={"Slim"} lastName="Chkir" />
    </div>
  );
}

export default MyComponent;
