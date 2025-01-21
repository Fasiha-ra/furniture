// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <div className="container mx-auto mt-0 -mb-10 relative ">
        <div className="bg-primary p-5  ">
          <ul className="grid gap-3 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            <li>
              <a
                href="/"
                className="text-white flex flex-col justify-center items-center gap-1"
              >
                <IoIosTime className="w-5 h-5" />
                <span>Monday to Friday</span>
                <span>10am to 7pm</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@company.com"
                className="text-white flex flex-col justify-center items-center gap-1"
              >
                <FaPhone className="w-5 h-5" />
                <span>Phone</span>
                <span>(123) 456-7890</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@company.com"
                className="text-white flex flex-col justify-center items-center gap-1"
              >
                <MdEmail className="w-5 h-5" />
                <span>Email</span>
                <span>contact@company.com</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-white flex flex-col justify-center items-center gap-1"
              >
                <FaLocationDot className="w-5 h-5" />
                <span>Address</span>
                <span>Country city</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="bg-gray-800 text-white pt-20 pb-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First Column: Logo and Paragraph */}
            <div className="flex flex-col">
              <img src={logo} alt="Logo" className="h-24 w-32" />
              <p className="text-sm text-gray-400">
                Your company description or about text goes here.
              </p>
            </div>

            {/* Second Column: Links */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
              <ul>
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Third Column: Links */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Our Expertise</h3>
              <ul>
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Kitchen Cabinets
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Cabinets Door
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Home Renovation
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Basement & Renovation
                  </a>
                </li>
              </ul>
            </div>

            {/* Fourth Column: Contact Info, Social Icons */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <p className="text-gray-400 flex gap-1">
                <FaPhone />{" "}
                <a href="tel:+1234567890" className="hover:text-white">
                  (123) 456-7890
                </a>
              </p>
              <p className="text-gray-400 flex gap-1">
                <MdEmail />{" "}
                <a
                  href="mailto:contact@company.com"
                  className="hover:text-white"
                >
                  contact@company.com
                </a>
              </p>
              <p className="text-gray-400 flex gap-1">
                <FaLocationDot /> country, city
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
