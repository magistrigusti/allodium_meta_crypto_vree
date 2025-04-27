import Feature from '../components/Allodium/Feature';
import Hero from '../components/Allodium/Hero';
import About from '../components/Allodium/About';


const AllodiumPage = () => {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
        <Hero />
        <About />
        <Feature />
      </main>
  );
};

export default AllodiumPage;
