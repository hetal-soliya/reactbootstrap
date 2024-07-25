import logo from './logo.svg';

import './App.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Slider from  './Components/Slider';
import Hero_section from './Components/Hero_section';
import Image_part from './Components/Image_part';
import Booking from './Components/Booking';


function App() {

  return (
    <>
      <Slider/>
      <Hero_section/>
      <Image_part/>
      <Booking/>
    </>

  );
}

export default App;
