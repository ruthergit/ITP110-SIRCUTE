import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = ({ contactRef }) => {
  return (
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
  );
};

export default ContactUs;
