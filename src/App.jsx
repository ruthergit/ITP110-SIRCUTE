import { useState, useRef, useEffect } from "react";
import { Bell, MapPin, Phone, Mail } from "lucide-react";
import Footer from "./Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showMore, setShowMore] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      contact: contactRef,
    };

    const ref = refs[activeSection];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

  const renderSection = () => (
    <>
      {/* Home Section */}
      <header ref={homeRef} className="flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-1/2 h-60 md:h-auto">
          <img
            className="w-full h-full object-cover"
            src="https://imgs.search.brave.com/8g0_RUz4jnlo-C0Rp-iYmC_HubBE89HtPJhwEZfdD1I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXdz/aW5mby5pbnF1aXJl/ci5uZXQvZmlsZXMv/MjAyNS8wMi8yMDQ4/cHgtUG5DX0JhZ29u/Z19DYWJ1eWFvX0hh/bGwtMTIwMHg4MjYu/anBn"
            alt="Campus"
          />
        </div>
        <div className="w-full md:w-1/2 bg-green-700 flex flex-col items-center justify-center p-6 md:p-12 text-center">
          <div className="text-center mb-6">
            <p className="text-white font-bold text-2xl md:text-3xl">
              WELCOME TO <span className="text-yellow-300">GROUP 4</span>!
            </p>
            <p className="text-white text-lg md:text-xl mt-2">
              Learning together, achieving together, and building a future
              through teamwork and dedication.
            </p>
          </div>
          <button className="px-5 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition">
            LEARN MORE
          </button>
        </div>
      </header>

      {/* About Us Section */}
      <header
        ref={aboutRef}
        className="px-6 py-12 bg-white text-gray-800 mt-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-10">
          ABOUT US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-6 border rounded-lg shadow-md flex flex-col items-center text-center h-full">
            <img
              src=""
              alt="Sheweliz Antinero"
              className="w-32 h-32 object-cover border rounded-full mb-4"
            />
            <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
              Sheweliz Antinero
            </h2>
            <p className="text-sm md:text-base mb-4">
              Add about yourself here.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 border rounded-lg shadow-md flex flex-col items-center text-center h-full">
            <img
              src="ruther.png"
              alt="Ruther Berino"
              className="w-32 h-32 object-cover border rounded-full mb-4"
            />
            <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
              Ruther Berino
            </h2>
            <p className="text-sm md:text-base mb-4">
              I'm a 4th-year student at Pamantasan ng Cabuyao. I enjoy watching
              anime and have skills to coding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 border rounded-lg shadow-md flex flex-col items-center text-center h-full">
            <img
              src="Jb_Gapas.png"
              alt="John Benedict Gapas"
              className="w-32 h-32 object-cover border rounded-full mb-4"
            />
            <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
              John Benedict Gapas
            </h2>
            <p className="text-sm md:text-base mb-4">
              I’m a 4th-year student at Pamantasan ng Cabuyao. I enjoy cycling,
              running, gaming, and watching movies and anime. I also have basic
              skills in web design and love exploring new ways to learn and
              grow.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 border rounded-lg shadow-md flex flex-col items-center text-center h-full">
            <img
              src="mich.jpg"
              alt="Michelle J. Loberiano"
              className="w-32 h-32 object-cover border rounded-full mb-4"
            />
            <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
              Michelle J. Loberiano
            </h2>
            <p className="text-sm md:text-base mb-4 text-justify">
              A 4th. Year BSIT student at Pamantasan ng Cabuyao. My hobbies are
              cooking, watching movies, and graphic designing. I am also
              passionate about technology and its impact on society. My skills
              include web development, UI/UX design, and digital marketing.
            </p>
          </div>

          {/* Extra cards appear only if showMore is true */}
          {showMore && (
            <>
              {/* Card 5 */}
              <div className="bg-white p-6 border rounded-lg shadow-md flex flex-col items-center text-center h-full">
                <img
                  src="liz.png"
                  alt="Liezel Paciente"
                  className="w-32 h-32 object-cover border rounded-full mb-4"
                />
                <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
                  Liezel Paciente
                </h2>
                <p className="text-sm md:text-base mb-4">
                  A 4th year, BSIT student at Pamantasan ng Cabuyao. I love
                  reading, and watching k-drama. I have a skills in
                  web-development, particulary in MySQL and PHP.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-6 border rounded-lg shadow-md flex flex-col items-center text-center h-full">
                <img
                  src="jgwen.png"
                  alt=" Jezimiel Gwen Panganiban"
                  className="w-32 h-32 object-cover border rounded-full mb-4"
                />
                <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
                  Jezimiel Gwen Panganiban
                </h2>
                <p className="text-sm md:text-base mb-4">
                  I am a 4th-year BSIT student with a strong interest in
                  technology and how it can be applied to solve real-world
                  problems. I am passionate about learning new tools and skills
                  that can help me improve in both academics and future career
                  opportunities.
                </p>
              </div>

              {/* Card 7 */}
              <div className="bg-white p-6 border rounded-lg shadow-md flex flex-col items-center text-center h-full">
                <img
                  src=""
                  alt="Brian Ravanera"
                  className="w-32 h-32 object-cover border rounded-full mb-4"
                />
                <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
                  Brian Ravanera
                </h2>
                <p className="text-sm md:text-base mb-4">
                  Add about yourself here.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 border-2 border-green-700 bg-green-700 text-white font-bold rounded hover:bg-green-600 transition"
          >
            {showMore ? "SHOW LESS" : "MORE"}
          </button>
        </div>
      </header>

      {/* Contact Section */}
      <header ref={contactRef} className="px-6 py-12 mt-10 mb-12">
        <div className="max-w-6xl mx-auto border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 flex flex-col justify-start bg-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700 text-center md:text-left">
                CONTACT US
              </h2>
              <p className="mb-4 text-center md:text-left">
                Fill up the form to connect to our team.
              </p>
              <div className="space-y-3 text-center md:text-left mt-4">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-green-700" />
                  <span>
                    Katapatan Homes, Brgy.Banay-Banay, Cabuyao, Laguna
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-5 h-5 text-green-700" />
                  <span>+63 912 345 6789</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-green-700" />
                  <span>group4@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="bg-green-700 p-6 flex justify-center">
              <form className="bg-white text-gray-800 rounded-lg p-6 w-full shadow space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-semibold">Name:</label>
                    <input
                      type="text"
                      className="w-full md:w-full p-3 border rounded"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">Email:</label>
                    <input
                      type="email"
                      className="w-full md:w-full p-3 border rounded"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Subject:</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Message:</label>
                  <textarea
                    rows="6"
                    className="w-full p-3 border rounded"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-500 transition"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="h-[60px] flex bg-green-900 text-white justify-between items-center px-6 font-bold sticky top-0 z-50 shadow">
        <h1 className="text-xl">GROUP 4</h1>

        {/* Navigation */}
        <div className="gap-5 flex justify-center items-center">
          <button
            onClick={() => setActiveSection("home")}
            className={`relative pb-1 transition ${
              activeSection === "home"
                ? "after:w-full text-yellow-300"
                : "after:w-0 hover:text-yellow-300"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={`relative pb-1 transition ${
              activeSection === "about"
                ? "after:w-full text-yellow-300"
                : "after:w-0 hover:text-yellow-300"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300`}
          >
            About
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={`relative pb-1 transition ${
              activeSection === "contact"
                ? "after:w-full text-yellow-300"
                : "after:w-0 hover:text-yellow-300"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300`}
          >
            Contacts
          </button>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6" />
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      <div className="flex-1">{renderSection()}</div>

      <Footer />
    </div>
  );
};

export default App;
