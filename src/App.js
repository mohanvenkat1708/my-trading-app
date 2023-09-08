import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

import Content from './Content';
import Footer from './Footer';
import UserOption from './UserOption';

function App() {
  return (
    <div className="App">
      <Header/>
      <UserOption/>
      <Footer/>
    </div>
  );
}

export default App;
