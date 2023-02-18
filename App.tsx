import * as React from 'react';
import './style.css';
import Navbar from './components/navbar/Navbar';
import NavbarBG from './components/navbarBG/NavbarBG';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import UnderHeader from './components/underHeader/UnderHeader';
import Struggle from './components/struggle/Struggle';
import Leverage from './components/leverage/Leverage';
import Webinar from './components/webinar/Webinar';
import OurClients from './components/ourClients/OurClients';
import HoustonBanner from './components/houstonBanner/HoustonBanner';
import Trusted from './components/trusted/Trusted';

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
        <Leverage />
        <Webinar />
        <OurClients />
        <HoustonBanner />
        <Trusted />
      </div>
    </div>
  );
}
