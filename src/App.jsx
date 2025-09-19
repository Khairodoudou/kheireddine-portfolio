import Header  from "./Components/Header.jsx"
import Hero  from "./Sections/Hero.jsx"
import About from "./Sections/About.jsx";
import Resume from "./Sections/Resume.jsx";
import Contactt from "./Sections/Contact.jsx";
import Certificat from "./Sections/CertificatSection.jsx";
import Longage from "./Sections/langage.jsx";
import EndSection from "./Sections/EndSection.jsx";
import Footer  from "./Components/Footer.jsx"
import { Contact } from "lucide-react";
import Projects from "./Sections/Projects.jsx";


function App() {



  return (
      <div>
          <Header/>
          <Hero/>
          <About/>
          <Resume/>
          <Projects/>
          <Certificat/>
          <Longage/>
          <Contactt/>
          <EndSection/>
          <Footer/>
      </div>
  )
}

export default App;

