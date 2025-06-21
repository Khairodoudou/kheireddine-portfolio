import certification from '../images/certif_of_participation.png';
import qualam from '../images/qualam.png';
import bigdata from '../images/bigdata.png';


const Certificat = () => {
  const cards = [
    {
      image: certification,
      category: "Cybersecurity ",
      categoryColor: "text-rose-500 bg-rose-100",
      title: "Certificate of Participation",
      description:
        "a l'événement de l'IA et de la cybersécurité.",
      author: "En - ligne",
      date: "Jan 01, 2024",
    },
    {
      image: bigdata,
      category: "Intelligence Artificielle",
      categoryColor: "text-sky-500 bg-sky-100",
      title: "Big Data",
      description:
        "IBM DeveloperSkills Network",
      author: "En - ligne",
      date: "Jan 27, 2024",
    },
    {
      image: qualam,
      category: "Web Development",
      categoryColor: "text-yellow-500 bg-yellow-100",
      title: "Certificat  in Web Development",
      description:
        "Établissement  de formation professionnelle",
      author: "Annaba",
      date: "Mars 04, 2023",
    },
    // {
//   image: sql,
//   category: "Web Development",
//   categoryColor: "text-yellow-500 bg-yellow-100",
//   title: "SQL Certificate",
//   description: "Coursera - Meta",
//   author: "En - ligne",
//   date: "Jan 01, 2024",
// }

  ];

  return (
    <section id='Certificate' className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
           <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">
              <span>My {" "}</span>
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
                <span className="relative">Certificate</span>
              </span>
            </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
         Discover our latest certificates recognizing excellence and growth 

          </p>
        </div>

        <div className="grid max-w-md  grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          {cards.map((card, index) => (
            <div key={index} className='border-1 p-3 rounded-md border-gray-100'>
              <span href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img className="object-cover w-full h-full rounded-md" src={card.image} alt="" />
              </span>
              <span className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full mt-9 ${card.categoryColor}`}>
                {card.category}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <span href="#" title="" className="text-black">
                  {card.title}
                </span>
              </p>
              <p className="mt-4 text-gray-600">{card.description}</p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {card.author} . {card.date}
              </span>
            </div>
          ))}
        </div>

         {/*
<div className='pt-12 text-center flex container justify-center items-center'>
  <button className="relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
    <p className="z-10">SEE MORE</p>
  </button>
</div>
*/}


      </div>
    </section>
  );
};

export default Certificat;
