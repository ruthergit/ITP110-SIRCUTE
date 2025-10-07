const Home = ({ homeRef }) => {
  return (
    <header ref={homeRef} className="flex flex-col md:flex-row flex-1">
      <div className="w-full md:w-1/2 h-80 md:h-auto">
        <img
          className="w-full h-full object-cover"
          src="https://imgs.search.brave.com/8g0_RUz4jnlo-C0Rp-iYmC_HubBE89HtPJhwEZfdD1I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXdz/aW5mby5pbnF1aXJl/ci5uZXQvZmlsZXMv/MjAyNS8wMi8yMDQ4/cHgtUG5DX0JhZ29u/Z19DYWJ1eWFvX0hh/bGwtMTIwMHg4MjYu/anBn"
          alt="Campus"
        />
      </div>
      <div className="w-full md:w-1/2 bg-green-700 flex flex-col items-center justify-center p-6 md:p-12 text-center">
        <div className="text-center mb-6">
          <p className="text-white font-bold text-2xl md:text-3xl">
            Welcome to{" "}
            <span className="text-yellow-300">Pamantasan ng Cabuyao</span>!
          </p>
          <p className="text-white text-lg md:text-xl mt-2">
            Striving for excellence together, fostering learning, teamwork, and
            dedication for a brighter future.
          </p>
        </div>
        <button className="px-5 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition">
          LEARN MORE
        </button>
      </div>
    </header>
  );
};

export default Home;
