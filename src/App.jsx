import React from 'react';
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about"; 
import Services from "./components/services"; 
import DoctorsNurses from "./components/doctors-nurses";
import Technology from "./components/technology";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <NavBar />

      <main>
        <div id='home'>
          <Home />
        </div>

        <div id='about'>
          <About />
        </div>

        <div id='services'> 
          <Services />
        </div>

        <div id='doctorsnurses'>
          <DoctorsNurses />
        </div>
        <div id='technology'>
          <Technology/>
        </div>
      </main>
      
      <Footer/>  
    </>

  );
};

export default App;
