import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Calendar from './Components/Calendar2';
import Location from './Components/Location';
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Share from './Components/Share';
import GroovePaper from './Assets/GroovePaper.png';

const { Footer } = Layout;

const App = () => {
  return (
    <>
      <Title />
      <Gretting />
      <Gallery />
      <Calendar />
      <Location />
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2023 Yugyeong Kim
      </Footer>
    </>
  );
};

export default App;
