// src/Sections/Resume.jsx

const Resume = () => {
  return (
    <main id="Resume" className="bg-white min-h-screen py-12">
      <section id="resume" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">
            <span>My </span>
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
              <span className="relative">Resume</span>
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview highlighting my educational background, professional experience, key certifications, and technical skillset.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* ================= LEFT COLUMN ================= */}
          <div data-aos="fade-up" data-aos-delay="100">
            {/* EDUCATION */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-blue-600 rounded-full inline-block"></span>
              Education
            </h3>

            <div className="relative pl-8 mb-10">
              {/* Timeline Continuous Line */}
              <div className="absolute left-2 top-2 bottom-2 w-1 bg-blue-500"></div>

              {/* Master's Degree */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">Master's Degree</h4>
                <h5 className="text-sm font-medium text-blue-600">2023 - 2025</h5>
                <p className="text-gray-700 font-medium mt-0.5">Badji Mokhtar University – Annaba, Algeria</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Master's degree in Computer Networks and Security, focusing on secure infrastructure, distributed systems, and modern networking protocols.
                </p>
              </div>

              {/* Startup Degree / Patent */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">University Startup & Patent Degree</h4>
                <h5 className="text-sm font-medium text-blue-600">2022 - 2023</h5>
                <p className="text-gray-700 font-medium mt-0.5">Badji Mokhtar University – Faculty of Technology</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Invention Patent & Startup diploma under Ministerial Decree 1275 (Ref: UBMA-STARTUP-2023-00316) for innovative technological venture creation.
                </p>
              </div>

              {/* Bachelor's Degree */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">Bachelor's Degree in Computer Science</h4>
                <h5 className="text-sm font-medium text-blue-600">2020 - 2023</h5>
                <p className="text-gray-700 font-medium mt-0.5">Badji Mokhtar University – Annaba, Algeria</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Bachelor's degree in Computer Science obtained within the LMD framework, covering software engineering, database systems, and algorithms.
                </p>
              </div>

              {/* High School Diploma */}
              <div className="relative">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">High School Diploma (Baccalaureate)</h4>
                <h5 className="text-sm font-medium text-blue-600">2020</h5>
                <p className="text-gray-700 font-medium mt-0.5">Technical High School – Annaba, Algeria</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Technical Mathematics & Electrical Engineering stream with honors.
                </p>
              </div>
            </div>

            {/* SKILLS */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-purple-600 rounded-full inline-block"></span>
              Skills & Expertise
            </h3>

            <div className="relative pl-8">
              <div className="absolute left-2 top-2 bottom-2 w-1 bg-purple-500"></div>

              {/* Frontend & Desktop */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-purple-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Frontend & Desktop Development</h4>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  React.js, Next.js, Electron.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Responsive UI/UX.
                </p>
              </div>

              {/* Backend & Databases */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-purple-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Backend, Databases & APIs</h4>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Node.js, NestJS, Python, PHP, Laravel, PostgreSQL, MySQL, MongoDB, RESTful APIs, AI / OCR Integration.
                </p>
              </div>

              {/* Networking & Security */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-purple-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Networks, Security & DevOps</h4>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Computer Networks, Network Security, Git & GitHub, Linux, Vercel, Secure Architecture & Hardening.
                </p>
              </div>

              {/* Soft Skills */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-purple-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Leadership & Soft Skills</h4>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Technical Leadership, Team Management, Project Planning, Creative Problem Solving, Cross-functional Collaboration.
                </p>
              </div>

              {/* Languages */}
              <div className="relative">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-purple-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Languages</h4>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Arabic (Native / Fluent), French (Professional / Fluent), English (Professional Working Proficiency).
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div data-aos="fade-up" data-aos-delay="200">
            {/* PROFESSIONAL EXPERIENCE */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-blue-600 rounded-full inline-block"></span>
              Professional Experience
            </h3>

            <div className="relative pl-8 mb-10">
              {/* Timeline Line */}
              <div className="absolute left-2 top-2 bottom-2 w-1 bg-blue-500"></div>

              {/* Experience: Deputy Technical Director - AL Riyada Al Kanouniya */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">Deputy Technical Director</h4>
                <h5 className="text-sm font-medium text-blue-600">2025 - Present</h5>
                <p className="text-gray-700 font-medium mt-0.5">AL Riyada Al Kanouniya – Annaba, Algeria</p>
                <ul className="list-disc pl-5 text-gray-600 text-sm mt-1.5 space-y-1">
                  <li>Steering digital transformation, software strategy, and technical architecture for legal consulting solutions.</li>
                  <li>Leading technical teams, evaluating tech stacks, and enforcing data privacy and security compliance.</li>
                </ul>
              </div>

              {/* Experience: Founder & Lead Developer - Algorix Agency */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">Lead Full-Stack Developer & Founder</h4>
                <h5 className="text-sm font-medium text-blue-600">2024 - Present</h5>
                <p className="text-gray-700 font-medium mt-0.5">Algorix Agency – Algeria</p>
                <ul className="list-disc pl-5 text-gray-600 text-sm mt-1.5 space-y-1">
                  <li>Engineered and launched custom web, desktop, and SaaS solutions (Textile DZ, AutoLoc DZ, Dortoiri PMS, Taysir Compta, AutiLink DZ).</li>
                  <li>Delivered high-performance, tailor-made applications using Next.js, React, Electron, and PostgreSQL.</li>
                </ul>
              </div>

              {/* Experience: Part-Time Instructor */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">Part-Time Computer Science Instructor</h4>
                <h5 className="text-sm font-medium text-blue-600">Sep 2025 - Jan 2026</h5>
                <p className="text-gray-700 font-medium mt-0.5">Electronics Department, Badji Mokhtar University – Annaba, Algeria</p>
                <ul className="list-disc pl-5 text-gray-600 text-sm mt-1.5 space-y-1">
                  <li>Taught and supervised computer science practical lab sessions for university students.</li>
                  <li>Provided pedagogical support on programming fundamentals, algorithms, and computing tools.</li>
                </ul>
              </div>

              {/* Experience: IT Assistant */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">IT Assistant – SmileNet</h4>
                <h5 className="text-sm font-medium text-blue-600">July 2025</h5>
                <p className="text-gray-700 font-medium mt-0.5">SmileNet Cyber Café – Annaba, Algeria</p>
                <ul className="list-disc pl-5 text-gray-600 text-sm mt-1.5 space-y-1">
                  <li>Welcomed and assisted customers with digital services and computer applications.</li>
                  <li>Handled workstation maintenance, printing operations, and local network troubleshooting.</li>
                </ul>
              </div>

              {/* Experience: Asmidal Intern */}
              <div className="relative">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-xl font-semibold text-gray-800">IT & Network Security Intern</h4>
                <h5 className="text-sm font-medium text-blue-600">2025 (15 days)</h5>
                <p className="text-gray-700 font-medium mt-0.5">Asmidal Groupe – Annaba, Algeria</p>
                <ul className="list-disc pl-5 text-gray-600 text-sm mt-1.5 space-y-1">
                  <li>Gained practical exposure to enterprise network infrastructure, switches, routers, and cabling.</li>
                  <li>Deepened knowledge in enterprise security architectures and perimeter defense practices.</li>
                </ul>
              </div>
            </div>

            {/* CERTIFICATIONS & RECOGNITIONS */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
              Key Certifications & Honors
            </h3>

            <div className="relative pl-8">
              <div className="absolute left-2 top-2 bottom-2 w-1 bg-teal-500"></div>

              {/* Certificate 1: HealthAegis Recognition */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-teal-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Certificate of Recognition – HealthAegis</h4>
                <h5 className="text-sm font-medium text-teal-600">Jun 2026</h5>
                <p className="text-gray-700 font-medium mt-0.5">Higher School of Management (ESSG) – Annaba, Algeria</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Honored for valuable technical contribution and support in developing the HealthAegis digital healthcare project.
                </p>
              </div>

              {/* Certificate 2: LARIEF Lab */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-teal-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Certificate of Participation – Entrepreneurship</h4>
                <h5 className="text-sm font-medium text-teal-600">Nov 17, 2026</h5>
                <p className="text-gray-700 font-medium mt-0.5">Badji Mokhtar University – LARIEF Lab</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Speaker & participant at the Entrepreneurship Academic Day: "From a Student Idea to a Successful Startup".
                </p>
              </div>

              {/* Certificate 3: IBM Big Data */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-teal-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Big Data Professional Certification</h4>
                <h5 className="text-sm font-medium text-teal-600">Jan 27, 2024</h5>
                <p className="text-gray-700 font-medium mt-0.5">IBM Developer Skills Network – Online</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Comprehensive training in Big Data architecture, distributed analytics, and data pipeline fundamentals.
                </p>
              </div>

              {/* Certificate 4: AI & Cybersecurity */}
              <div className="relative mb-6">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-teal-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">AI & Cybersecurity Event Certificate</h4>
                <h5 className="text-sm font-medium text-teal-600">2024</h5>
                <p className="text-gray-700 font-medium mt-0.5">Cheikh Larbi Tebessi University – Tébessa, Algeria</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Participation in academic sessions focused on artificial intelligence challenges and advanced cybersecurity defense.
                </p>
              </div>

              {/* Certificate 5: Web Development */}
              <div className="relative">
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-teal-400 rounded-full border-2 border-white shadow-sm"></div>
                <h4 className="text-lg font-semibold text-gray-800">Certificate in Web Development</h4>
                <h5 className="text-sm font-medium text-teal-600">Mar 2023</h5>
                <p className="text-gray-700 font-medium mt-0.5">Private Vocational Training Institute (El Qualam) – Annaba</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Hands-on professional training in modern frontend and backend web application engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
