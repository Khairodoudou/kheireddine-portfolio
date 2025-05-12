import vedio_portfolio_réseau from '../images/vedio_portfolio_réseau.png';
import coding from '../images/coding.jpg';
import cybersec from '../images/cybersec.jpg';
import aipic from '../images/aipic.jpg';


const EndSection = () => {
  return (
    <section className="pt-5 bg-white sm:pt-16 lg:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-center justify-center items-center text-black sm:text-4xl lg:text-4xl lg:leading-tight">
            I'm{" "}
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
              <span className="relative">Available</span>
            </span>{" "}
            for freelancing
          </h2>

          <div className="flex items-center p-3 justify-center">
            {/* Image : Cybersécurité */}
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src={cybersec}
                alt="Cybersecurity"
              />
            </div>

            {/* Image principale : Web Dev  */}
            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
              <img
                className="object-cover w-full h-full"
                src={coding}
                alt="Web Development"
              />
            </div>

            {/* Image : Intelegence Artificielle */}
            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src={aipic}
                alt="AI"
              />
            </div>
          </div>

          <p className="text-lg text-gray-900 mt-6">
            I design and build high-quality, performant, and user-focused web applications.
            Let’s collaborate to bring your ideas to life.
          </p>

          <div className="pt-10 text-center flex container justify-center items-center">
            <a
              href="#!"
              className="relative btn group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
            >
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
              <p className="z-10 text-xl">Hire me</p>
            </a>
          </div>
        </div>
      </div>

      <div className="container flex mx-auto p-3 justify-center items-center 2xl:px-12">
        <img
          className="md:w-1/2 mt-6"
          src={vedio_portfolio_réseau}
          alt="Portfolio preview"
        />
      </div>
    </section>
  );
};

export default EndSection;
