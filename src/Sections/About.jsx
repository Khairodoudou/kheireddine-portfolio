import about_kheireddine from '../images/about.jpg';



function About() {
    return (
      <div>
      <section id='About' className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-center justify-center items-center text-black sm:text-4xl lg:text-4xl lg:leading-tight">
              Learn more{" "}
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
                <span className="relative">About me</span>
              </span>
            </h2>
          </div>
  
          <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
              <img
                className="w-full mx-auto sm:max-w-xs rounded-2xl border-none shadow-xl"
                src={about_kheireddine}
                alt="Software Engineer"
              />
            </div>
  
            <div>

              <p className="mt-4 text-lg text-gray-500">
              Passionate about innovation and determined to excel in my field, I am committed to pushing my limits to achieve professional excellence. <span className='text-gray-900'>Meticulous</span>, <span className='text-gray-900'>creative</span>, and always <span className='text-gray-900'>seeking</span> new <span className='text-gray-900'>challenges</span>, I turn ideas into concrete solutions with <span className='text-gray-900'>precision</span> and <span className='text-gray-900'>ambition</span>.
              </p>
              
              <ul className="space-y-3 text-lg pt-2">
            <li>
              <span className="font-bold text-gray-900">Name :</span> <span className='text-gray-700'>Debz Kheireddine</span>
            </li>
            <li>
              <span className="font-bold text-gray-900">Date of birth :</span> <span className='text-gray-700'> 16 / 12 / 2001 </span> 
            </li>
            <li>
              <span className="font-bold text-gray-900">Address :</span> <span className='text-gray-700'> Sidi Achour , Annaba </span>
            </li>
            
            <li>
              <span className="font-bold text-gray-900">Email :</span> <span className='text-gray-700'>Kheireddinedebz@gmail.com</span>
            </li>
            <li>
              <span className="font-bold text-gray-900">Phone :</span> <span className='text-gray-700'>+ 213696566905</span>
            </li>
            <li>
              <span className="font-bold text-gray-900">Military situation : </span> <span className='text-gray-700'> Ifa</span>
            </li>
            <li>
              <span className="font-bold text-gray-900">Freelance :</span> <span className='text-gray-700'> Available</span>
            </li>
          </ul>
  

             
            </div>
          </div>
        </div>

      <div className=' pt-12 bg-gray-50  text-center flex container justify-center items-center'>
<button className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">

  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
  <p className="z-10">DOWNLOAD CV</p>
</button>


      </div>
      </section>

      
      </div>
    );
  }
  
  export default About;
  