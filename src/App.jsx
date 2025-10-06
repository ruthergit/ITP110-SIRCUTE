import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import Footer from "./Footer";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import MissionVision from "./MissionVision";
import Gallery from "./Gallery";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const missionVisionRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll handler
  const handleScroll = (section) => {
    setActiveSection(section);
    const refs = {
      home: homeRef,
      about: aboutRef,
      missionVision: missionVisionRef,
      gallery: galleryRef,
      contact: contactRef,
    };
    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-highlight + Navbar animation on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      setIsScrolled(window.scrollY > 60);

      const sections = [
        { name: "home", ref: homeRef },
        { name: "about", ref: aboutRef },
        { name: "missionVision", ref: missionVisionRef },
        { name: "gallery", ref: galleryRef },
        { name: "contact", ref: contactRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionTop = sections[i].ref.current?.offsetTop || 0;
        if (scrollPosition >= sectionTop) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Animated Navbar */}
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 font-bold z-50 shadow-md transition-all duration-300 ${
          isScrolled
            ? "bg-green-950 h-[55px] shadow-lg backdrop-blur-md"
            : "bg-green-900 h-[65px]"
        } text-white`}
      >
        <h1
          className={`transition-all duration-300 ${
            isScrolled ? "text-lg" : "text-xl"
          }`}
        >
          GROUP 4
        </h1>

        <div className="gap-5 flex justify-center items-center">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "missionVision", label: "Mission & Vision" },
            { id: "gallery", label: "Gallery" },
            { id: "contact", label: "Contacts" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleScroll(btn.id)}
              className={`relative pb-1 transition ${
                activeSection === btn.id
                  ? "after:w-full text-yellow-300"
                  : "after:w-0 hover:text-yellow-300"
              } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6" />
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile.png"
            alt="Profile"
            className={`rounded-full object-cover transition-all duration-300 ${
              isScrolled ? "w-9 h-9" : "w-10 h-10"
            }`}
          />
        </div>
      </header>

      {/* Sections */}
      <main className="mt-[65px]">
        <Home homeRef={homeRef} />
        <AboutUs aboutRef={aboutRef} />
        <MissionVision missionVisionRef={missionVisionRef} />
        <Gallery galleryRef={galleryRef} />
        <ContactUs contactRef={contactRef} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
