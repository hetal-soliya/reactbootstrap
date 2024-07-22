import logo from './logo.svg';

import './App.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Hero_section from './Components/Hero_section';

import Image_part from './Components/Image_part';
import Booking from './Components/Booking';


function App() {

  return (
    <>
      <Hero_section/>
      <Image_part/>
      <Booking/>
    </>

  );
}

export default App;
