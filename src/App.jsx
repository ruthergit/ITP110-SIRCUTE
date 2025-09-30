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
              src="sheweliz.png"
              alt="Sheweliz Antinero"
              className="w-32 h-32 object-cover border rounded-full mb-4"
            />
            <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
              Sheweliz Antinero
            </h2>
            <p className="text-sm md:text-base mb-4">
              I'm a 4th-year BSIT student at Pamantasan ng Cabuyao. 
              My hobbies are hiking and watching movies. 
              I have skills in web design and enjoy learning new technologies to expand my knowledge in development.
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
                  src="bri.jpg"
                  alt="Brian Ravanera"
                  className="w-32 h-32 object-cover border rounded-full mb-4"
                />
                <h2 className="text-green-700 font-bold text-lg md:text-xl mb-2">
                  Brian Ravanera
                </h2>
                <p className="text-sm md:text-base mb-4 text-justify">
                  I love to cook, which means I find joy in the process of creation, preparing delicious food, and sharing that nourishment with others. I also enjoy playing online games when I'm free, which points to my energetic side that seeks fun, challenges, and lighthearted engagement. Finally, I love Scuderia Ferrari one of the F1 team, embracing a love for speed, history, and the thrilling competition of Formula 1.
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
<header
  ref={contactRef}
  className="px-6 py-16 mt-10 mb-12 bg-gradient-to-r from-green-50 to-green-100"
>
  <div className="max-w-6xl mx-auto border rounded-2xl overflow-hidden shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-2">
     
    

{/* Left Panel */}
<div className="bg-white flex flex-col justify-start p-8 pt-12">
  <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4">
    CONTACT US
  </h2>

        <p className="mb-6 text-gray-600 leading-relaxed">
          Fill up the form below to connect with our team. We’d love to
          hear from you!
        </p>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-green-600" />
            <span>
              Katapatan Homes, Brgy. Banay-Banay, Cabuyao, Laguna
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-green-600" />
            <span>+63 912 345 6789</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-green-600" />
            <span>group4@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-green-700 p-8 flex justify-center">
        <form className="bg-white text-gray-800 rounded-xl p-8 w-full shadow-lg space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Name:
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email:
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Subject:
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Message:
            </label>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition"
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
