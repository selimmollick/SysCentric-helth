import { useState } from "react";
import { FaHandHoldingMedical,FaFacebookF,FaXTwitter } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { MdOutlineEmail,MdOutlinePhoneIphone } from "react-icons/md";
import { LiaGooglePlusG } from "react-icons/lia";
import { TiSocialYoutubeCircular , TiSocialLinkedin} from "react-icons/ti";
import HeroSection from "../herosection/HereSection";
import Header1 from "../header1/Header1";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import Header2 from "../header2/Header2";
import Galley from "../gallery/Gallery";
import Footer from "../footer/Footer";
import Team from "../team/Team";

const Header=()=>{
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
        <nav className="bg-white p-4 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
          <div className="flex items-center">
         <div className="flex">
          <FaHandHoldingMedical className="w-12 h-12"/>
           <div className="ml-2 leading-3"> {/* Adjust margin as needed */}
           <a href="#" className="text-cyan-400 font-bold text-2xl flex items-center">
           Care<span className="text-gray-800">points</span>
           </a>
          <p className="text-gray-800 tracking-widest font-sans font-bold">Best Doctors</p>
        </div>
  </div>
</div>

            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li className="flex">
                <FiClock className="w-10 h-10 bg-sky-500  rounded-full my-1 py-1" />
                <div className="ml-2 leading-3"> {/* Adjust margin as needed */}
               <a href="#" className="text-gray-900 font-bold text-lg flex items-center">
                Work Time:09:00-17:00
               </a>
                <p className="text-gray-800 font-serif">Saturday and Sunday-<span className="font-bold">CLOSED</span></p>
              </div>
                </li>
                <li className="flex">
                <MdOutlineEmail className="w-10 h-10 bg-sky-500  rounded-full my-1 py-1" />
                <div className="ml-2 leading-3"> {/* Adjust margin as needed */}
               <a href="#" className="text-gray-900 font-bold text-lg flex items-center">
                Mail US
               </a>
                <p className="text-gray-800 font-serif">carepoints@gmail.com</p>
              </div>
                </li>
                <li className="flex">
                <MdOutlinePhoneIphone className="w-10 h-10 bg-sky-500  rounded-full my-1 py-1" />
                <div className="ml-2 leading-3"> {/* Adjust margin as needed */}
               <a href="#" className="text-gray-900 font-bold text-lg flex items-center">
                Call US
               </a>
                <p className="text-gray-800 font-serif">+91 8391970722</p>
              </div>
                </li>
              </ul>
            </div>
            
            <div className="block md:hidden">
              <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <hr className="mt-4"></hr>
          <div className=" justify-between items-center hidden sm:flex">
  <ul className="flex space-x-4">
    <li><Link to="/" className="block px-4 py-2 text-gray-800">Home</Link></li>
    <li><Link to="/about-us" className="block px-4 py-2 text-gray-800">About</Link></li>
    <li><Link to="/services" className="block px-4 py-2 text-gray-800">Services</Link></li>
    <li><Link to="/gallery" className="block px-4 py-2 text-gray-800">Gallery</Link></li>
    <li><Link to="/blog" className="block px-4 py-2 text-gray-800">Blog</Link></li>
    <li><Link to="/contact" className="block px-4 py-2 text-gray-800">Contact us</Link></li>
  </ul>
  <div className="flex space-x-8">
    {/* Add your social icons here */}
    <div className="mt-1">
      <FaFacebookF className="h-7 w-7"/>
    </div>
    <div>
      <LiaGooglePlusG className="w-10 h-10"/>
    </div>
    <div>
      <FaXTwitter  className="w-6 h-6 mt-2"/>
    </div>
    <div>
      <TiSocialYoutubeCircular className="w-9 h-9" />
    </div>
    <div>
      <TiSocialLinkedin className="w-9 h-9"/>
    </div>
    {/* Add more social icons as needed */}
  </div>
</div>


        </div>
        {isOpen && (
          <div className="md:hidden">
            <ul className="mt-2 space-y-2">
            <li><Link to="/" className="block px-4 py-2 text-gray-800">Home</Link></li>
    <li><Link to="/about-us" className="block px-4 py-2 text-gray-800">About</Link></li>
    <li><Link to="/services" className="block px-4 py-2 text-gray-800">Services</Link></li>
    <li><Link to="/gallery" className="block px-4 py-2 text-gray-800">Gallery</Link></li>
    <li><Link to="/blog" className="block px-4 py-2 text-gray-800">Blog</Link></li>
    <li><Link to="/contact" className="block px-4 py-2 text-gray-800">Contact us</Link></li>
            </ul>
          </div>
        )}
      </nav>
      
      
    )
}

export default Header;