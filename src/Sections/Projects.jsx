// src/Sections/Projects.jsx
import { motion as Motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import textileDz from "../images/textile-dz-pc.png";
import autolocDz from "../images/autoloc-dz.jpg";
import dortoiri from "../images/dortoiri.jpg";
import cyber from "../images/cyber.jpg";
import aipic from "../images/aipic.jpg";
import cybersec from "../images/cybersec.jpg";

// ✅ Inline Card component
function Card({ children, className }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full ${className || ""}`}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-6 flex flex-col flex-grow justify-between ${className || ""}`}>{children}</div>;
}

// ✅ Project list
const projects = [
  {
    title: "Textile DZ",
    description:
      "The premier digital network and platform in Algeria dedicated to the textile and sewing industry, connecting designers, workshops, pattern makers, and fabric stores across 69 wilayas.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    demo: "https://textile-dz.tech/",
    image: textileDz,
  },
  {
    title: "AutoLoc DZ",
    description:
      "Premier car rental web platform in Annaba, Algeria. Features real-time vehicle booking, comprehensive fleet catalog of 20+ vehicles, and seamless multi-agency pickup management.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    demo: "https://autoloc-dz.vercel.app/",
    image: autolocDz,
  },
  {
    title: "Dortoiri",
    description:
      "Modern offline Property Management System (PMS) tailored for Algerian dormitories. Ultra-fast, legally compliant desktop software engineered to manage residents, bookings, and revenue 100% offline.",
    tech: ["Electron.js", "React", "Tailwind CSS", "Offline PMS"],
    demo: "https://www.dortoiri.app/",
    image: dortoiri,
  },
  {
    title: "NetGuard – Security Scanner",
    description:
      "Network vulnerability assessment and port discovery tool designed to analyze enterprise subnets and detect unauthorized services.",
    tech: ["Python", "Linux", "Network Security", "Bash"],
    demo: "https://github.com/Khairodoudou",
    image: cyber,
  },
  {
    title: "AI Document Intelligence",
    description:
      "Smart document parsing application leveraging computer vision and machine learning models for automated data extraction.",
    tech: ["Python", "AI / Vision", "React", "FastAPI"],
    demo: "https://github.com/Khairodoudou",
    image: aipic,
  },
  {
    title: "Enterprise UTM & Network Topology",
    description:
      "Multi-tier simulated network infrastructure with VLAN segmentation, OSPF routing, firewall security policies, and VPN tunnels.",
    tech: ["Cisco", "FortiGate", "Wireshark", "Network Sec"],
    demo: "https://github.com/Khairodoudou",
    image: cybersec,
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">
            <span>My </span>
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
              <span className="relative">Projects</span>
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my latest projects across web development, IT networks,
            artificial intelligence, and cybersecurity. Each project reflects my commitment
            to performance, security, and clean user experience.
          </p>
        </div>

        {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop/PC */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card>
                {/* Project Image: 100% plein écran edge-to-edge */}
                <div className="overflow-hidden bg-gray-100 h-52 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Visit Button */}
                    <div className="pt-3 border-t border-gray-100">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
                      >
                        <ExternalLink className="w-4 h-4 mr-1.5" /> View Project
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
