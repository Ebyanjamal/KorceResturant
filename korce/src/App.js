import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Header from './components/Header';
import Emails from './components/Emails';

const App = () => {

  return (
    <> 
    <Header />
    <Router className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
        {/* <nav>
          <Link to="/">Hero</Link>
          <Link to="/About">About</Link>
          <Link to="/Team">Team</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/testimonial">Testimonial</Link> 
          <Link to="/reservation">Reservation</Link>
        </nav> */}
      <Routes>
      <Route path="/" element={<Hero/>} />  
      <Route path="/About" element={<About/>} />  
      <Route path="/Team" element={<Team/>} />  
      <Route path="/Menu" element={<Menu/>} />  
      <Route path="/Testimonial" element={<Testimonial/>} /> 
      <Route path="/tests" element={<Emails/>} /> 
      {/* <Route path="/Reservation" element={<Reservation/>} />  */}
      <Route path="/Footer" element={<Footer/>} /> 
      </Routes>
      <div className='h-[380px] md:h-[370px]'></div>
      </Router>
      <Reservation/>
      <Footer/>
      </>
  );
};

export default App;
