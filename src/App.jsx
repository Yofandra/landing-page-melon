import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <div className='h-screen bg-neutral-200'>
      <Navbar />
      <Home />
    </div>
    <div className='h-full'>
      <div className='bg-neutral-300 h-3/4'>
        <About />
      </div>
    </div>
    <div className='h-screen bg-neutral-200'>
      <Product />
    </div>
    <div className='h-80 bg-neutral-300'>
      <Contact />
    </div>
    </>
  )
}

export default App
