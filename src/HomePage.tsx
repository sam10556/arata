import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  return (
    <>
    <Header />
    <Hero />
    <Features />
    <HowItWorks />
    <About />
    <Testimonials />
    <Footer />
  </>
  )
}

export default HomePage