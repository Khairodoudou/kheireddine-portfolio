// src/Sections/Projects.jsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import theroadace from "../images/theroadace-pic.png"; // ✅ Import local
import BSF from "../images/BSF.png"; // ✅ Import local

// ✅ Inline Card component
function Card({ children, className }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className || ""}`}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-6 ${className || ""}`}>{children}</div>;
}

// ✅ Project list with imported image
const projects = [
  {
    title: "THE ROAD ACE",
    description:
    "Freight transport company with vehicles under 3.5T, providing deliveries throughout France with 20m³ tail lift.",
    tech: ["React", "Tailwind", "Laravel"],
    demo: "https://theroadace.fr/",
    image: theroadace, // ✅ utilise l'import, pas un string
  },
  {
    title: "BSF Plumbing Solutions",
    description:
    "Providing reliable and eco-friendly plumbing solutions with quality products and exceptional service.",
    tech: ["React", "Bootstrap", "Laravel"],
    demo: "https://bfs-orcin.vercel.app/",
    image: BSF, // reste en public/
  },

];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="Projects">
      <div className="max-w-6xl mx-auto px-6">
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
            Explore a selection of my latest projects, where I put my skills in
            web development and modern UI design into practice. Each project
            reflects my focus on detail, performance, and user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                {/* ✅ Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-84 object-cover"
                />
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <div className="flex">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 font-medium hover:text-blue-600 transition"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" /> View Project
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
