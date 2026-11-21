import { useState, useEffect } from 'react';
import { ZoomIn, X } from 'lucide-react';
import certification from '../images/certif_of_participation.png';
import qualam from '../images/qualam.png';
import bigdata from '../images/bigdata.png';
import larief from '../images/certif-larief.jpg';
import startupPatent from '../images/certif-startup-patent.jpg';
import healthaegisCertif from '../images/healthaegis-certif.jpg';

const Certificat = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Close modal on Escape key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCard(null);
    };
    if (selectedCard) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedCard]);

  const cards = [
    {
      image: certification,
      category: "Cybersecurity",
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
    <section id="Certificate" className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">
            <span>My </span>
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
              <span className="relative">Certificates</span>
            </span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Discover our latest certificates recognizing excellence, technical skills, and academic achievements. Click on any certificate to view it in full size.
          </p>
        </div>

        {/* Certificates Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 md:max-w-4xl md:grid-cols-2 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-100 p-4 rounded-xl flex flex-col justify-between h-full bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Clickable Certificate Thumbnail with Zoom overlay */}
                <div
                  onClick={() => setSelectedCard(card)}
                  className="group relative block w-full h-56 overflow-hidden rounded-lg bg-gray-50 cursor-pointer shadow-inner"
                  title="Click to view full certificate"
                >
                  <img
                    className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-gray-900 text-xs font-semibold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4 text-purple-600" />
                      Click to zoom
                    </span>
                  </div>
                </div>

                <span
                  className={`inline-flex px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full mt-5 ${card.categoryColor}`}
                >
                  {card.category}
                </span>

                <p className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
                  {card.title}
                </p>

                <p className="mt-2.5 text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div>
                <div className="h-0 mt-6 mb-4 border-t border-gray-200 border-dashed"></div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold tracking-wider text-gray-500 uppercase text-xs">
                    {card.author} · {card.date}
                  </span>
                  <button
                    onClick={() => setSelectedCard(card)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 hover:text-purple-700 hover:underline transition"
                  >
                    <ZoomIn className="w-3.5 h-3.5" /> View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Zoom Lightbox Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedCard(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute -top-11 right-0 sm:top-3 sm:right-3 z-20 p-2 text-white bg-black/60 hover:bg-black/90 rounded-full transition shadow-lg"
              title="Close (Esc)"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Zoomed Image Container */}
            <div className="overflow-hidden rounded-xl shadow-2xl bg-black/40 flex items-center justify-center max-h-[78vh] w-auto">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="max-h-[78vh] w-auto max-w-full object-contain rounded-xl select-none"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-3 text-center text-white max-w-2xl px-4">
              <h3 className="text-lg sm:text-xl font-bold">{selectedCard.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">{selectedCard.description}</p>
              <span className="inline-block mt-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
                {selectedCard.author} · {selectedCard.date}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificat;
