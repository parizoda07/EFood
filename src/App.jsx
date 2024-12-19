import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Main from './components/main/Main' ;
import Card from './components/card/Card';
import Cards from './components/cards/Cards';
import Section from './components/section/Section'
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Main/>
      <Card/>
      <Cards/>
      <Section/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Form/>
      <Footer/>
      {/* <div className="container">
        <div className="card-wrapper">
          <Card  img=''  name="" "/>
      
        </div>
      </div> */}
    </div>
  );
}

export default App;
