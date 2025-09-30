import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import Footer from "./Footer";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const refs = { home: homeRef, about: aboutRef, contact: contactRef };
    const ref = refs[activeSection];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <header className="h-[60px] flex bg-green-900 text-white justify-between items-center px-6 font-bold sticky top-0 z-50 shadow">
        <h1 className="text-xl">GROUP 4</h1>

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

        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6" />
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Sections */}
      <Home homeRef={homeRef} />
      <AboutUs aboutRef={aboutRef} />
      <ContactUs contactRef={contactRef} />

      <Footer />
    </div>
  );
};

export default App;
