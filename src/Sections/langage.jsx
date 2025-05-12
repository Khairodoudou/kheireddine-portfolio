import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import bootstrap from '../images/bootstrap.png';
import tailwind from '../images/tailwind.svg';
import materialui from '../images/materialui.png';
import reactImg from '../images/react.png';
import python from '../images/python.png';
import nodejs from '../images/nodejs.png';
import git from '../images/git.png';
import cyber from '../images/cyber.jpg';
import network from '../images/network.png';
import ai from '../images/ai.png';
import sqll from '../images/sqll.png';
import mongodb from '../images/mongodb.png';

const technologies = [
  { name: 'HTML', role: 'Markup Language', img: html },
  { name: 'CSS', role: 'Style Sheet Language', img: css },
  { name: 'JavaScript', role: 'Programming Language', img: js },
  { name: 'Bootstrap', role: 'CSS Framework', img: bootstrap },
  { name: 'Tailwind CSS', role: 'Utility-First Framework', img: tailwind },
  { name: 'Material UI', role: 'React UI Library', img: materialui },
  { name: 'React', role: 'JavaScript Library', img: reactImg },
   { name: 'SQL', role: 'Relational Database', img: sqll },
  { name: 'MongoDB', role: 'NoSQL Database', img: mongodb },
  { name: 'Git', role: 'Version Control', img: git },
  { name: 'Node.js', role: 'Runtime Environment', img: nodejs },
  { name: 'Python', role: 'Programming Language', img: python },
  { name: 'Cybersecurity', role: 'Security Concepts', img: cyber },
  { name: 'Networking', role: 'Computer Networks', img: network },
  { name: 'Artificial Intelligence', role: 'Machine Learning & AI', img: ai },
 
];

const Longage = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold leading-tight text-center justify-center items-center text-black sm:text-4xl lg:text-4xl lg:leading-tight">
              The Stack{" "}
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
                <span className="relative">That Drives Us</span>
              </span>
            </h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Here are some of the core technologies that power our development process.
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-10 lg:grid-cols-5 gap-x-0">
          {technologies.map((tech, index) => (
            <div key={index}>
              <img
                className="object-contain mx-auto w-20 h-20 rounded"
                src={tech.img}
                alt={tech.name}
              />
              <p className="mt-4 text-lg font-semibold text-black">{tech.name}</p>
              <p className="text-sm text-gray-600">{tech.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Longage;
