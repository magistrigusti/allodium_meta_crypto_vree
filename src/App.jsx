import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Allodium/Hero';
import About from './components/Allodium/About';
import DominumPage from './pages/DominumPage';
import DominariumPage from './pages/DominariumPage';
import MagisteriumPage from './pages/MagisteriumPage';
import MercatusPage from './pages/MercatusPage';
import PortalPage from './pages/PortalPage';

const App = () => {
  return (
    <BrowserRouter>
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dominum" element={<DominumPage />} />
          <Route path="/dominarium" element={<DominariumPage />} />
          <Route path="/magisterium" element={<MagisteriumPage />} />
          <Route path="/mercatus" element={<MercatusPage />} />
          <Route path="/portal" element={<PortalPage />} />
        </Routes> */}
        <Hero />
        <About />
      </main>
    </BrowserRouter>
  );
};

export default App;
