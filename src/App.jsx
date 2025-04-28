import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllodiumPage from './pages/AllodiumPage'; 
import DominumPage from './pages/DominumPage';
// import DominariumPage from './pages/DominariumPage';
// import MagisteriumPage from './pages/MagisteriumPage';
// import MercatusPage from './pages/MercatusPage';
// import PortalPage from './pages/PortalPage';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<AllodiumPage />} />
        <Route path="/dominum" element={<DominumPage />} />
        {/* <Route path="/dominarium" element={<DominariumPage />} />
        <Route path="/magisterium" element={<MagisteriumPage />} />
        <Route path="/mercatus" element={<MercatusPage />} />
        <Route path="/portal" element={<PortalPage />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
