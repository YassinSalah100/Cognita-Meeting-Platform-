import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import VideoShowcase from './components/VideoShowcase';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <InteractiveDemo />
      <VideoShowcase />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;