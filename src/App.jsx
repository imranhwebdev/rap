import { React } from 'react'
import Header from './components/Header'
import Banner from './components/Banner';
import Footer from './components/Footer'
import About from './components/About'
import Gallery from './components/Gallery';
import MarqueeRap from './components/MarqueeRap';

function App() {

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Gallery />
      <MarqueeRap />
      <Footer />
    </>
  )
}

export default App
