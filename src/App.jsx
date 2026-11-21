import Header from "./Components/Header.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Resume from "./Sections/Resume.jsx";
import Projects from "./Sections/Projects.jsx";
import Certificat from "./Sections/CertificatSection.jsx";
import Longage from "./Sections/langage.jsx";
import Contactt from "./Sections/Contact.jsx";
import EndSection from "./Sections/EndSection.jsx";
import Footer from "./Components/Footer.jsx";
import BackToTop from "./Components/BackToTop.jsx";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Certificat />
      <Longage />
      <Contactt />
      <EndSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
