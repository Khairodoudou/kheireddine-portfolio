import certification from '../images/certif_of_participation.png';
import qualam from '../images/qualam.png';
import bigdata from '../images/bigdata.png';
import larief from '../images/certif-larief.jpg';
import startupPatent from '../images/certif-startup-patent.jpg';
import healthaegisCertif from '../images/healthaegis-certif.jpg';


const Certificat = () => {
  const cards = [
    {
      image: certification,
      category: "Cybersecurity ",
      categoryColor: "text-rose-500 bg-rose-100",
      title: "Certificate of Participation",
      description:
        "AI & Cybersecurity event – Online participation.",
      author: "Online",
      date: "Jan 01, 2024",
    },
    {
      image: bigdata,
      category: "Artificial Intelligence",
      categoryColor: "text-sky-500 bg-sky-100",
      title: "Big Data",
      description:
        "IBM Developer Skills Network – Online.",
      author: "Online",
      date: "Jan 27, 2024",
    },
    {
      image: qualam,
      category: "Web Development",
      categoryColor: "text-yellow-500 bg-yellow-100",
      title: "Certificate in Web Development",
      description:
        "Professional Training Institute – Web Development.",
      author: "Annaba",
      date: "Mar 04, 2023",
    },
    {
      image: larief,
      category: "Entrepreneurship",
      categoryColor: "text-green-600 bg-green-100",
      title: "Certificate of Participation",
      description:
        "Badji Mokhtar University – LARIEF Lab · Entrepreneurship Academic Day",
      author: "Annaba",
      date: "Nov 17, 2026",
    },
    {
      image: startupPatent,
      category: "Innovation & Startup",
      categoryColor: "text-purple-600 bg-purple-100",
      title: "Startup & Patent Certificate",
      description:
        "Badji Mokhtar University – Faculty of Technology · Ref: UBMA-STARTUP-2023-00316",
      author: "Annaba",
      date: "Aug 08, 2023",
    },
    {
      image: healthaegisCertif,
      category: "Digital Health",
      categoryColor: "text-teal-600 bg-teal-100",
      title: "Certificate of Recognition",
      description:
        "Higher School of Management (ESSG Annaba) · Recognition for valuable contribution to HealthAegis project.",
      author: "Annaba",
      date: "Jun 2026",
    },
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

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 md:max-w-4xl md:grid-cols-2 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className='border-1 p-3 rounded-md border-gray-100 flex flex-col justify-between h-full bg-white shadow-sm hover:shadow-md transition-shadow'>
              <div>
                <div className="block w-full h-52 overflow-hidden rounded-md bg-gray-50">
                  <img className="object-cover w-full h-full rounded-md" src={card.image} alt={card.title} />
                </div>
                <span className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full mt-6 ${card.categoryColor}`}>
                  {card.category}
                </span>
                <p className="mt-4 text-xl font-semibold">
                  <span className="text-black">
                    {card.title}
                  </span>
                </p>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
              <div>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {card.author} · {card.date}
                </span>
              </div>
            </div>
          ))}
        </div>



        
      </div>
    </section>
  );
};

export default Certificat;
