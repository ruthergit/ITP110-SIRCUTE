import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import MissionVision from "./pages/MissionVision";
import Gallery from "./pages/Gallery";
import Contact from "./pages/ContactUs";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-[100px] px-6 bg-gray-50">
        <section id="home" className=" border-b border-gray-200">
          <Home />
        </section>

        <section id="about" className="border-b border-gray-200">
          <About />
        </section>

        <section id="mission-vision" className=" border-b border-gray-200">
          <MissionVision />
        </section>

        <section id="gallery" className="border-b border-gray-200">
          <Gallery />
        </section>

        <section id="contact" className="">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
