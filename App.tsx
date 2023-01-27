import * as React from 'react';
import './style.css';
import Navbar from './components/navbar/Navbar';
import NavbarBG from './components/navbarBG/NavbarBG';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import UnderHeader from './components/underHeader/UnderHeader';
import Struggle from './components/struggle/Struggle';

export default function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <Navbar />
        <WhatWeDo />
      </div>
      <NavbarBG />
      <div className="appMain">
        <UnderHeader />
        <Struggle />
      </div>
    </div>
  );
}
