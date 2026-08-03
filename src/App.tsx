import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import AboutUs from './components/AboutUs';
import CoverageMap from './components/CoverageMap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <AboutUs />
          <CoverageMap />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </TooltipProvider>
    </LanguageProvider>
  );
}

export default App;
