import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import AISection from "./components/AISection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0a0118] text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <AISection />
      <Testimonials />
      <FAQ />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;

