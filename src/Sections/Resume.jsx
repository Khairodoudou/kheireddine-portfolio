

const Resume = () => {
  return (
    <main id="Resume" className="bg-white min-h-screen py-12">
      <section id="resume" className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">
              
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
                <span className="relative">Resume</span>
              </span>
            </h2>
          <p className="text-lg text-gray-600">
            "A concise overview highlighting my educational background, technical expertise, and hands-on experience."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div data-aos="fade-up" data-aos-delay="100">

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>
              {/* Timeline Circles */}
              <div className="absolute left-0.5 top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="mb-6">
                <h4 className="text-xl font-medium text-gray-800">Master's Degree</h4>
                <h5 className="text-gray-500">2024 - 2025</h5>
                <p className="text-gray-600 font-medium">Badji Mokhtar University , Annaba , Algeria</p>
                <p className="text-gray-600">
                    Master's degree in Computer Network and Security
                </p>
              </div>

              <div className="absolute left-0.5 top-32 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Bachelor's Degree</h4>
                <h5 className="text-gray-500">2020 - 2023</h5>
                <p className="text-gray-600 font-medium">Badji Mokhtar University , Annaba , Algeria</p>
                <p className="text-gray-600">
                    Bachelor's degree in Computer Science obtained within the framework of the LMD system.
                </p>
              </div>


              

            
            </div>
                
            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>

              <br />
              {/* Timeline Circle */}
              <div className="absolute left-0.5 top-7 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Startup Degree</h4>
                <h5 className="text-gray-500">2022 - 2023</h5>
                <p className="text-gray-600 font-medium">Badji Mokhtar University , Annaba , Algeria</p>
                <p className="text-gray-600">
                    Invention Patent (Startup) 
                </p>
              </div>
            </div>

            <div className="relative pl-8">
              {/* Timeline Line */}
              <br />

              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>
              {/* Timeline Circle */}
              <div className="absolute left-0.5 top-7 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">High School Diploma</h4>
                <h5 className="text-gray-500">2020</h5>
                <p className="text-gray-600 font-medium">Technical High School, Annaba , Algeria</p>
                <p className="text-gray-600">
                    Bachelor's degree in Mathematical Techniques and Electrical Engineering. 
                </p>
              </div>
            </div>

          <br />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>

            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>

              <br />
              {/* Timeline Circle */}
              <div className="absolute left-0.5 top-7 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Technical Skills</h4>
                <h5 className="text-gray-500"> HTML, CSS, JavaScript, PHP, PYTHON , TailwindCSS, Bootstrap, Laravel, Git, GitHub, MYSQL, MONGO DB</h5>
              </div>
            </div>



           


            
             <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>

              <br />
              {/* Timeline Circle */}
              <div className="absolute left-0.5 top-7 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Soft Skills</h4>
                <h5 className="text-gray-500"> Leadership, Team Management, Creative Problem Solving, Collaboration</h5>
              </div>
            </div>




             <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>

              <br />
              {/* Timeline Circle */}
              <div className="absolute left-0.5 top-7 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Languages</h4>
                <h5 className="text-gray-500"> Arabic (Fluent), French (Intermediate), English (Intermediate)</h5>
              </div>
            </div>

          </div>







          {/* Right Column */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Experience</h3>
            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>
              {/* Timeline Circles */}
              <div className="absolute left-0.5 top-2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="mb-6">
                <h4 className="text-xl font-medium text-gray-800">IT and Network Security Intern</h4>
                <h5 className="text-gray-500">2025 - 15 days</h5>
                <p className="text-gray-600 font-medium">Asmidal Groupe – Annaba, Algeria</p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Gained practical exposure to network infrastructure including switches, routers, and structured cabling.</li>
                  <li>Observed and supported configuration of FortiGate UTM appliances: firewall, IDS, web filtering, antivirus.</li>
                  <li>Developed a strong understanding of secure network architecture and common cybersecurity protocols.</li>
                </ul>
              </div>
           
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certification</h3>

            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>

              <br />
              {/* Timeline Circle */}
              <div className="absolute left-0.5 top-7 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Certificate of Participation</h4>
                 <h5 className="text-gray-500">08 / 04 / 2025 & 09 / 04 /2025 </h5>
                <p className="text-gray-600 font-medium">Echahid Cheikh Larbi Tebessi University University – Tbessa, Algeria</p>
                <h5 className="text-gray-500"> Certificat de participation aux activités de l'événement sur les défis de l'intelligence artificielle et de la cybersécurité.</h5>

              </div>
            </div>



           


            
             <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>

              <br />
              {/* Timeline Circle */}
              <div className="absolute left-0.5 top-7 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Certificate in Web Development</h4>
                 <h5 className="text-gray-500">2022 </h5>
                <p className="text-gray-600 font-medium">Private Vocational Training Institute – EL Quaiam</p>
              </div>
            </div>




             <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-500"></div>

              <br />
              {/* Timeline Circle */}
              <div className="absolute left-0.5 top-7 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
               <div>
                <h4 className="text-xl font-medium text-gray-800">SQL Certificate</h4>
                 <h5 className="text-gray-500">2024 </h5>
                <p className="text-gray-600 font-medium">Coursera - Meta</p>
              </div>
            </div>

          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Resume;