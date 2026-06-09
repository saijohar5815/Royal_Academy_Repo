import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Programs from "../components/Programs/Programs";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Achievements from "../components/Achievements/Achievements";
import Facilities from "../components/Facilities/Facilities";
import CampusLife from "../components/CampusLife/CampusLife";
import News from "../components/News/News";
import Testimonials from "../components/Testimonials/Testimonials";
import AdmissionCTA from "../components/AdmissionCTA/AdmissionCTA";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/gallery/gallery";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Achievements />
      <Facilities />
      <CampusLife />
      <Gallery />
      <News />
      <Testimonials />
      <AdmissionCTA />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;