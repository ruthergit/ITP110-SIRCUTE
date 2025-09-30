import { useState } from "react";

const AboutUs = ({ aboutRef }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <header ref={aboutRef} className="px-6 py-12 bg-white text-gray-800 mt-12">
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
            I'm a 4th-year BSIT student at Pamantasan ng Cabuyao. My hobbies are
            hiking and watching movies. I have skills in web design and enjoy
            learning new technologies to expand my knowledge in development.
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
            skills in web design and love exploring new ways to learn and grow.
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
                I love to cook, which means I find joy in the process of
                creation, preparing delicious food, and sharing that nourishment
                with others. I also enjoy playing online games when I'm free,
                which points to my energetic side that seeks fun, challenges,
                and lighthearted engagement. Finally, I love Scuderia Ferrari
                one of the F1 team, embracing a love for speed, history, and the
                thrilling competition of Formula 1.
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
  );
};

export default AboutUs;
