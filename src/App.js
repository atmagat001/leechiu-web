import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Banner from './components/Banner';
import Services from './components/Services';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Hero />
      
      <Services />
      <About />

    </div>
  );
}

export default App;
