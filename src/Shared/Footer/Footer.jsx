import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-200 pt-10">
      <div className="container mx-auto">
        <footer className=" text-gray-700">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl space-y-8  mx-auto mt-10 p-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Ready to Hire Smarter?
            </h2>
            <p className="mb-4 text-sm">
              Unlock Exclusive Insights Subscribe to Our Newsletter
            </p>
            <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-300 transition">
              Join Now
            </button>
          </div>

          <div className=" mx-auto p-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 w-6 h-6 rounded-r-xl"/>
                <span className="text-lg font-bold">Logo</span>
              </div>
              <p>
                SalesRank.AI offers a comprehensive suite of AI-powered
                solutions to help you find expert sales professionals who can
                elevate every aspect of your business. From performance rankings
                and skill verification to industry benchmarking and real-time
                analytics, we provide the insights and tools to optimize your
                sales strategy and drive growth.
              </p>
              <div className="flex gap-4 mt-4 text-lg">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>Service</li>
                <li>Agency</li>
                <li>Case Study</li>
                <li>Resource</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Licence</h3>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Copyright</li>
                <li>Email Address</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaPhone /> (408) 555-0120
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> hey@bocastin.com
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt /> 2972 Westheimer Rd. Santa Ana, Illinois
                  85486
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
