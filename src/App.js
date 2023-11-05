import React from 'react';
// import ke file css nya
import "./App.css";
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portofolio from './components/portofolio/Portofolio';
import Services from './components/services/Services';
import Pricing from './components/pricing/Pricing';
import Testimoni from './components/testimoni/Testimoni';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Testimoni />
      </main>
    </>
  )
}

export default App