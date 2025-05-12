
function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center flex justify-center items-center leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">
              
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5"></span>
                <span className="relative">Thank You</span>
              </span>
            </h2>

        <p className="text-lg text-center flex pt-2 justify-center items-center text-gray-600">
            I hope my work has provided valuable insight or inspiration.
          </p>

        {/* Social Media */}
               <div className="container mx-auto px-4 pt-4">
                <ul className="flex flex-wrap items-center justify-center space-x-3 sm:space-x-4 md:space-x-6">
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

                   

                      {/* Telegram */}
                      <li>
                        <a
                          href="https://t.me/+213696566905"
                          className="flex items-center justify-center text-white bg-[#0088cc] rounded-full w-10 h-10"
                          title="Telegram"
                          target="_blank"

                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
        <br />

          <b className="text-lg text-gray-500 text-center block">
            Copyright © {new Date().getFullYear()} <a href="#!">Kheireddine Debz</a> 
          </b>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
