import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactt = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_789tbcs', 'template_4p72qhi', form.current, 'fDAFoKb-kSaOO8ya_')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
        },
        (error) => {
          console.log('Failed to send email:', error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id='Contact' className="py-10 bg-gray-50 sm:py-10 lg:py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
              <span className="relative">Contact Me</span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Fill up the form and I will get back to you within 24 hours
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
            {/* Form Section */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold text-black">Send me a message</h3>
                <form ref={form} onSubmit={sendEmail} className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">Your name</label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="mt-2.5 block w-full px-4 py-2 text-black placeholder-gray-500 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Your email</label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        className="mt-2.5 block w-full px-4 py-2 text-black placeholder-gray-500 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Phone number</label>
                      <input
                        type="tel"
                        name="user_phone"
                        required
                        className="mt-2.5 block w-full px-4 py-2 text-black placeholder-gray-500 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="mt-2.5 block w-full px-4 py-2 text-black placeholder-gray-500 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-base font-medium text-gray-900">Message</label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        className="mt-2.5 block w-full px-4 py-2 text-black placeholder-gray-500 border border-gray-200 rounded-md bg-gray-50 resize-y focus:outline-none focus:border-blue-600 focus:bg-white"
                      ></textarea>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="relative overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer group"
                      >
                        <span className="z-10 relative">Send</span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right"></span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right"></span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right"></span>
                      </button>

                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="bg-gray-100 lg:col-span-2">
              <div className="h-full p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-semibold text-black">Contact information</h4>

                  <div className="mt-8 space-y-7">
                    {[
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM12 11a2 2 0 100-4 2 2 0 000 4z"
                          />
                        ),
                        text: 'Annaba, Algeria',
                      },
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        ),
                        text: 'kheireddinedebz.com',
                      },
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        ),
                        text: '(213) 696566905',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg
                          className="flex-shrink-0 text-blue-600 w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {item.icon}
                        </svg>
                        <span className="block ml-3 text-base text-gray-900">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 lg:mt-auto">
                  <hr className="border-gray-200" />
                  <div className="flex items-center justify-center mt-7">
                    <ul className="flex items-center justify-center space-x-3">
                      {/* Facebook */}
                      <li>
                        <a
                          href="https://www.facebook.com/khairo.debz?locale=fr_FR"
                          className="flex items-center justify-center text-white bg-[#1877F2] rounded-full w-10 h-10"
                          title="Facebook"
                          target="_blank"

                        >
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.3v-2.88h2.3V9.41c0-2.27 1.35-3.52 3.42-3.52.99 0 2.02.18 2.02.18v2.22h-1.14c-1.13 0-1.48.7-1.48 1.42v1.7h2.52l-.4 2.88h-2.12v6.99A10 10 0 0 0 22 12z" />
                          </svg>
                        </a>
                      </li>

                      {/* LinkedIn */}

                      <li>
                        <a
                          href="https://www.linkedin.com/in/kheireddine-debz-9b4b25290"
                          className="flex items-center justify-center text-white bg-[#0A66C2] rounded-full w-10 h-10"
                          title="LinkedIn"
                          aria-label="LinkedIn Profile"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.49 0 53.5S24.09-1.1 53.79-1.1c29.45 0 53.78 24.6 53.78 54.6 0 29.98-24.33 54.6-53.78 54.6zM447.9 448h-92.4V302.4c0-34.7-12.5-58.4-43.6-58.4-23.8 0-38 16-44.3 31.4-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.5s1.2-268.1 0-296H267v41.9c12.3-19 34.2-46.1 83.3-46.1 60.8 0 106.6 39.7 106.6 125.2V448z" />
                          </svg>
                        </a>
                      </li>



                      {/* GitHub */}
                      <li>
                        <a
                          href="https://github.com/Khairodoudou"
                          className="flex items-center justify-center text-white bg-[#333] rounded-full w-10 h-10"
                          title="GitHub"
                          target="_blank"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.5-1.8-1.5-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 2 2.8 1.4 3.5 1.1.1-.8.4-1.4.8-1.8-2.7-.3-5.6-1.3-5.6-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0C17 5.8 18 6 18 6c.7 1.7.2 2.9.1 3.2.7.8 1.2 1.8 1.2 3.1 0 4.5-2.9 5.5-5.6 5.8.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z" />
                          </svg>
                        </a>
                      </li>

                    {/* Telegram */}
<li>
  <a
    href="https://t.me/+213696566905"
    className="flex items-center justify-center text-white bg-[#0088cc] rounded-full w-10 h-10"
    title="Telegram"
    aria-label="Telegram Contact"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.036 16.518l-.39 5.13c.558 0 .796-.24 1.095-.525l2.625-2.49 5.445 3.99c1.005.555 1.725.27 1.98-.93l3.6-16.875h.005c.27-1.26-.45-1.755-1.44-1.455L2.41 9.27c-1.23.42-1.215 1.02-.21 1.29l5.58 1.74L18.87 4.5 9.036 16.518z" />
    </svg>
  </a>
</li>


                      {/* WhatsApp */}
                      <li>
  <a
    href="https://wa.me/213696566905" // Remplace ce numéro par le tien
    rel="noopener noreferrer"
    className="flex items-center justify-center text-white bg-[#25D366] rounded-full w-10 h-10 transition-all duration-300"
    title="WhatsApp"
    target="_blank"

  >
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.003 0c-8.822 0-15.995 7.173-15.995 15.995 0 2.82.74 5.574 2.139 7.999l-2.13 7.775 8.004-2.098a15.964 15.964 0 0 0 7.982 2.033c8.822 0 15.997-7.175 15.997-15.997S24.825 0 16.003 0zm.013 29.388a13.373 13.373 0 0 1-6.82-1.869l-.486-.287-4.748 1.246 1.264-4.628-.317-.476a13.314 13.314 0 1 1 11.107 6.014zm7.344-9.974c-.402-.199-2.377-1.17-2.747-1.305-.37-.135-.639-.199-.909.2-.27.398-1.042 1.305-1.277 1.574-.234.27-.469.301-.87.101-.402-.199-1.698-.624-3.235-1.988-1.195-1.065-2.003-2.382-2.237-2.78-.234-.398-.025-.613.176-.812.182-.181.402-.469.603-.703.2-.234.267-.4.402-.667.135-.267.067-.501-.034-.7-.101-.2-.909-2.196-1.244-3.009-.328-.789-.66-.682-.909-.692l-.775-.008a1.506 1.506 0 0 0-1.094.511c-.37.402-1.448 1.413-1.448 3.444s1.483 3.995 1.689 4.271c.201.267 2.934 4.48 7.107 6.288 4.174 1.808 4.174 1.206 4.927 1.134.754-.067 2.377-.97 2.714-1.907.335-.937.335-1.74.234-1.907-.101-.168-.369-.267-.77-.466z" />
    </svg>
  </a>
                    </li>

                    </ul>
                  </div>
                </div>
                {/* End Social Media */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactt;

