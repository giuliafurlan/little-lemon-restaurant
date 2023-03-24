import About from '../components/About';
import HeroSection from '../components/HeroSection';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
};

export default HomePage;
