import Header  from "./Components/Header.jsx"
import Hero  from "./Sections/Hero.jsx"
import About from "./Sections/About.jsx";
import Resume from "./Sections/Resume.jsx";
import Contactt from "./Sections/Contact.jsx";
import Certificat from "./Sections/CertificatSection.jsx";
import Longage from "./Sections/langage.jsx";
import Footer  from "./Components/Footer.jsx"
import { Contact } from "lucide-react";


function App() {



  return (
      <div>
          <Header/>
          <Hero/>
          <About/>
          <Resume/>
          <Certificat/>
          <Contactt/>
          <Longage/>
          <Footer/>
      </div>
  )
}

export default App;

