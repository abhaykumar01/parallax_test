import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Header from './components/menu/menu';
import Intro from './components/intro/intro';
import Community from './components/community/community';
import Feeds from './components/feeds/feeds';
import Dummy from './components/dummy/dummy';
import Location from './components/location/location';


function App() {
  return (
    <div className="app">
      <Header ></Header>
      <Intro ></Intro>
      <Feeds></Feeds>
      <Location ></Location>
      <Community ></Community>
      <Dummy></Dummy>

    </div>
  );
}

export default App;
