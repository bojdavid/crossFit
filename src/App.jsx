import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FindUs from './components/FindUs';
import JoinUs from './components/JoinUs';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import Logos from './components/Logos';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[1920px] mx-auto main-bg color-mint-500 bg-[#131619]  font-heebo'>
          <NavBar />
          <Hero />
          <Logos />
          <JoinUs />
          <FindUs />
          <PreFooter />
          <Footer />
      </div>
      
    </>
  )
}

export default App
