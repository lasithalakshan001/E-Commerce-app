
import './App.css'

import Footer from './components/Organism/Footer';
import Header from './components/Organism/Header';
import HeroSection from './components/Organism/HeroSection';
import Home from './Pages/Home';

function App() {


  return (
    <>
      <div className='app-container'>

        
        <Header/>
        <main className="contain">
          <Home/>
        </main>
        
        
        <Footer/>
      </div>
    </>
  )
}

export default App
