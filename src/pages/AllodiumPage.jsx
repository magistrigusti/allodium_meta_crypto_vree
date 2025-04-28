import Feature from '../components/Allodium/Feature';
import Hero from '../components/Allodium/Hero';
import About from '../components/Allodium/About';
import Story from '../components/Allodium/Story';


const AllodiumPage = () => {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
        <Hero />
        <About />
        <Feature />
        <Story />
      </main>
  );
};

export default AllodiumPage;
