import { useEffect, useState } from 'react';
import kheireddine from '../images/kheireddine_picture.jpeg';

const words = ["Web development ",  "AI", "IT networks", "Cybersecurity"];

function Hero() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <section id='Home' className="pt-24 overflow-hidden bg-white md:pt-14 sm:pt-20 2xl:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className='md:text-start sm:text-center'>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
              Hey 👋 I'am <br className="block sm:hidden" /> Kheireddine Debz
            </h2>

            <p className="max-w-xl mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              A passionate software engineer with knowledge in{' '}
              <i className="text-blue-600  border-b-2 font-bold ">
                {displayedText}
              </i>
              , focused on creating efficient, secure, and scalable solutions.
            </p>

            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
              <span className="absolute hidden sm:inline-block w-full bottom-0.5 h-2 bg-purple-300"></span>
             <b className="relative text-black"> Turn your vision into tailored digital solutions </b> 
              </span>
              &nbsp;
              <span>
                Whether you're an ambitious startup or an established company 
                looking to strengthen your digital presence,
                 I help bring your digital projects to life with efficiency,
                  creativity, and professionalism.

              </span>
              &nbsp;
              <a
               target="_blank"
                href="https://wa.me/213696566905"
                title="Hire Me"
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Hire Me
              </a>
            </p>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src={kheireddine}
              alt="Kheireddine"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
