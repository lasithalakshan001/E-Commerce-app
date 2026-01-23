
import './App.css'

import Footer from './components/Organism/Footer';
import Header from './components/Organism/Header';
import Home from './Pages/Home';

function App() {


  return (
    <>
      <div className='app-container'>

        
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default App
