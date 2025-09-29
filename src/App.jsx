import { useState } from 'react';
import About from './About';
import Contact from './Contact';
import { Bell } from 'lucide-react';
import Footer from './Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home'); 
  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <div className='relative bg-color-dirty w-full h-[94vh] flex items-center'>
            <div className='flex w-full h-[500px] px-20 justify-between gap-16'>
              {/* Left Side */}
              <div className='w-1/2 max-w-6xl'>
                <img
                  className='w-full h-full object-cover'
                  src="https://imgs.search.brave.com/8g0_RUz4jnlo-C0Rp-iYmC_HubBE89HtPJhwEZfdD1I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXdz/aW5mby5pbnF1aXJl/ci5uZXQvZmlsZXMv/MjAyNS8wMi8yMDQ4/cHgtUG5DX0JhZ29u/Z19DYWJ1eWFvX0hh/bGwtMTIwMHg4MjYu/anBn"
                  alt=""
                />
              </div>

              {/* Right Side */}
              <div className='w-1/2 max-w-6xl bg-green-700 h-full p-30'>
              <p className='text-white font-bold text-center'>A primier institution of higher learning in Region IV, developing globally-competitive and value-laden professionals and leaders instrumental to community development and nation-building</p>
                
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className=''>
      <header className='flex bg-green-900 text-white justify-between  items-center px-20 py-4 font-bold'>
        <h1 className='text-xl'>GROUP 4</h1>

        <div className='gap-5 flex justify-center items-center w-1/6'>
          <button onClick={() => setActiveSection('home')}>Home</button>
          <button onClick={() => setActiveSection('about')}>About</button>
          <button onClick={() => setActiveSection('contact')}>Contacts</button>
        </div>
       
       <div>
       <Bell/>
       </div>
        
      </header>

      {renderSection()}
      <Footer/>
    </div>
  );
};

export default App;