
import Navbar from '../components/Navbar';
import Dominum from '../components/Dominum/Dominum';
import About from '../components/Dominum/About'

const DominumPage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
        <Navbar />
        <Dominum />
        <About />
    </main>
  )
}

export default DominumPage
