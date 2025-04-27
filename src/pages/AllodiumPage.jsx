import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Allodium/Hero';
import About from '../components/Allodium/About';


const AllodiumPage = () => {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
        <Navbar />
        <Hero />
        <About />
      </main>
  );
};

export default AllodiumPage;
