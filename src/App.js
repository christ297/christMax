import React from 'react';
import Header from './components/Header';
import Snowfall from './components/Snowfall';
import ParallaxSection from './components/ParallaxSection';
import GreetingMessage from './components/GreetingMessage';
import Traditions from './components/Traditions';
import Calendar from './components/Calendar';
import InteractiveFeatures from './components/InteractiveFeatures';
import MakeAWish from './components/MakeAWish';
import Footer from './components/Footer';
import ARExperience from './components/ARExperience';
import ChristmasMusic from './components/ChristmasMusic';

function App() {
  return (
    <div className="app-container">
      <Snowfall />
      <Header />
      <main>
        <ChristmasMusic/>
        <ParallaxSection>
          <GreetingMessage />
        </ParallaxSection>
        <Traditions />
        <Calendar />
        <InteractiveFeatures />
        <MakeAWish />
      </main>
      <Footer />
    </div>
  );
}

export default App;
